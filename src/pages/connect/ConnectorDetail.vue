<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card>
      <q-card-section>
        <div class="text-h6">配置信息:{{ detailInfo.name }}</div>
        <div class="row wrap">
          <q-item
            tag="a"
            class="col-3"
            v-for="(value, key) in detailInfo.info.config"
            :key="key"
          >
            <q-item-section>
              <q-item-label caption>
                {{ key }}
              </q-item-label>
              <q-item-label>{{ value }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>
    </q-card>
    <q-table
      wrap-cells
      title="任务列表"
      :rows="detailInfo.status.tasks"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body-cell-state="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-chip
              square
              :color="connectorState[props.row.state]"
              text-color="white"
            >
              {{ props.row.state }}
            </q-chip>
          </div>
        </q-td>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="accent"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <q-btn
              v-if="col.name == 'operate'"
              rounded
              color="primary"
              label="重启"
              @click="restartTask(props.row)"
            />
            <q-chip
              v-if="col.name == 'state'"
              square
              :color="connectorState[props.row.state]"
              text-color="white"
            >
              {{ props.row.state }}
            </q-chip>

            <span v-else>{{ col.value }}</span>
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              {{ props.row.trace ? props.row.trace : "暂无错误跟踪信息" }}
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  reactive,
  toRefs
} from 'vue'
import {
  ConnectorsControllerService,
  ConnectorsLifecycleControllerService,
  serviceOptions
} from 'src/api/data-pipeline/indexv3'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
export default defineComponent({
  name: 'ConnectorDetail',
  props: {
    detailInfo: {
      type: Object
    }
  },
  setup (props, ctx) {
    const internalInstance = getCurrentInstance()
    const router = useRouter()
    const route = useRoute()
    const $q = useQuasar()
    serviceOptions.axios =
      internalInstance.appContext.config.globalProperties.$api
    const { groupId } = route.query
    const tableState = reactive({
      columns: [
        {
          name: 'id',
          label: '任务ID',
          align: 'left',
          field: 'id'
        },
        {
          name: 'state',
          label: '状态',
          align: 'left',
          field: 'state'
        },
        {
          name: 'workerId',
          label: 'WorkerId',
          align: 'left',
          field: 'worker_id'
        },
        {
          name: 'operate',
          align: 'left',
          label: '操作'
        }
      ],
      rows: []
    })
    const connectorState = reactive({
      connectorState: {
        RUNNING: 'positive',
        FAILED: 'negative',
        PAUSED: 'grey-6'
      }
    })
    const restartTask = (row) => {
      ConnectorsLifecycleControllerService.restart1({
        cluster: groupId,
        connectorname: props.detailInfo.name,
        tasknumber: row.id
      }).then((r) => {
        $q.notify('重启成功')
      })
    }
    return {
      ...toRefs(tableState),
      ...toRefs(connectorState),
      restartTask
    }
  }
})
</script>
