<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el
        label="连接器集群"
        icon="widgets"
        to="/connect-clusters"
      />
      <q-breadcrumbs-el
        label="连接器集群详情"
        icon="widgets"
        to="/connect-detail"
      />
    </q-breadcrumbs>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">集群信息</div>
      </q-card-section>
      <q-separator />
    </q-card>
    <q-table
      title="连接器列表"
      :rows="data"
      :columns="columns"
      row-key="groupId"
    >
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-chip
              square
              :color="connectorState[props.row.status.connector.state]"
              text-color="white"
            >
              {{ props.row.status.connector.state }}
            </q-chip>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-taskStatus="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-chip
              square
              :key="index"
              v-for="(item, index) in parseTaskStatus(props.row.status.tasks)"
            >
              <q-avatar :color="connectorState[index]" text-color="white">{{
                item
              }}</q-avatar>
              {{ index }}
            </q-chip>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-operate="props">
        <q-td :props="props">
          <q-btn-group rounded>
            <q-btn
              rounded
              color="primary"
              label="详情"
              @click="detail(props.row)"
            />

            <q-btn
              rounded
              color="primary"
              label="修改"
              @click="editConnect(props.row)"
            />

            <q-btn-dropdown
              auto-close
              rounded
              color="primary"
              label="删除"
              split
              @click="deleteConnect(props.row)"
            >
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  @click="pauseConnect(props.row)"
                >
                  <q-item-section>
                    <q-item-label>暂停</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="resumeConnect(props.row)"
                >
                  <q-item-section>
                    <q-item-label>恢复</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="restartConnect(props.row)"
                >
                  <q-item-section>
                    <q-item-label>重启</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-btn-group>
        </q-td>
      </template>
      <template v-slot:top>
        <q-btn color="primary" label="添加连接器" />
        <q-space />
        <q-input dense debounce="300" color="primary">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
    <q-dialog v-model="connectDialog">
      <q-card style="width: 80vw; max-width: 80vw;">
        <ConnectorDetail :detailInfo="detailInfo"/>
      </q-card>
    </q-dialog>
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
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import ConnectorDetail from 'src/pages/connect/ConnectorDetail.vue'
export default defineComponent({
  name: 'ConnectClusterDetail',
  components: { ConnectorDetail },
  setup () {
    const internalInstance = getCurrentInstance()
    const route = useRoute()
    const $q = useQuasar()
    serviceOptions.axios =
      internalInstance.appContext.config.globalProperties.$api
    const { groupId } = route.query
    onMounted(() => {
      query(groupId)
    })
    const state = reactive({
      columns: [
        {
          name: 'name',
          label: '连接器名称',
          align: 'left',
          field: 'name'
        },
        {
          name: '类型',
          align: 'left',
          label: '类型',
          field: (row) => row.status.type
        },
        {
          name: 'class',
          label: 'Class',
          align: 'left',
          field: (row) => row.info.config[ 'connector.class' ]
        },
        {
          name: 'status',
          label: '状态',
          align: 'left',
          field: (row) => row.status.connector.state
        },
        {
          name: 'taskStatus',
          label: '任务状态',
          align: 'left'
        },
        {
          name: 'operate',
          align: 'left',
          label: '操作'
        }
      ],
      data: [],
      filter: ''
    })
    const connectorState = reactive({
      connectorState: {
        RUNNING: 'positive',
        FAILED: 'negative',
        PAUSED: 'grey-6'
      }
    })
    const query = (groupId) => {
      ConnectorsControllerService.expand({ cluster: groupId }).then((r) => {
        state.data = r
      })
    }
    const parseTaskStatus = (tasks) => {
      const map = {}
      for (const task of tasks) {
        if (task.state) {
          if (map[ task.state ]) {
            const value = map[ task.state ]
            map[ task.state ] = value + 1
          }
          else {
            map[ task.state ] = 1
          }
        }
      }

      return map
    }
    const connectDialogState = reactive({
      connectDialog: false,
      detailInfo: {}
    })

    const detail = (row) => {
      connectDialogState.connectDialog = true
      connectDialogState.detailInfo = row
    }
    const editConnect = (row) => {
      $q.notify('等待实现')
    }
    const deleteConnect = (row) => {
      $q.dialog({
        title: '确认',
        message: `确认删除${row.name}连接器？`,
        cancel: true,
        persistent: true,
        bgColor: 'purple'
      }).onOk(() => {
        ConnectorsLifecycleControllerService.connector1({
          cluster: groupId,
          connectorname: row.name
        }).then((r) => {
          $q.notify('删除成功')
        })
      })
    }
    const pauseConnect = (row) => {
      debugger
      ConnectorsLifecycleControllerService.pause({
        cluster: groupId,
        connectorname: row.name
      }).then((r) => {
        $q.notify('暂停成功')
      })
    }
    const resumeConnect = (row) => {
      ConnectorsLifecycleControllerService.resume({
        cluster: groupId,
        connectorname: row.name
      }).then((r) => {
        $q.notify('恢复成功')
      })
    }
    const restartConnect = (row) => {
      ConnectorsLifecycleControllerService.restart({
        cluster: groupId,
        connectorname: row.name
      }).then((r) => {
        $q.notify('重启成功')
      })
    }
    return {
      ...toRefs(state),
      ...toRefs(connectorState),
      ...toRefs(connectDialogState),
      detail,
      editConnect,
      deleteConnect,
      pauseConnect,
      resumeConnect,
      restartConnect,
      parseTaskStatus
    }
  }
})
</script>
