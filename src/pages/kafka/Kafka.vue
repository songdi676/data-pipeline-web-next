<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el
        label="Kafka"
        icon="widgets"
        to="/kafka"
      />
    </q-breadcrumbs>
    <q-table
      wrap-cells
      title="集群列表"
      :rows="rows"
      :columns="columns"
      row-key="cluster_id"
    >
      <template v-slot:body-cell-operate="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" label="详情" @click="detail(props.row)" />
          </div>
        </q-td>
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
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Kafka',
  setup () {
    const internalInstance = getCurrentInstance()
    const router = useRouter()
    const kafkaApi =
      internalInstance.appContext.config.globalProperties.$kafkaApi
    const tableState = reactive({
      columns: [
        {
          name: 'cluster_id',
          label: 'ID',
          align: 'left',
          field: 'cluster_id'
        },
        {
          name: 'kind',
          label: '类型',
          align: 'left',
          field: 'kind'
        },
        {
          name: 'operate',
          align: 'left',
          label: '操作'
        }
      ],
      rows: []
    })
    onMounted(() => {
      query()
    })
    const query = () => {
      kafkaApi.clusters.clustersList().then((r) => {
        tableState.rows = r.data.data
      })
    }

    const detail = (row) => {
      router.push({ path: '/kafka-detail', query: { clusterId: row.cluster_id } })
    }

    return {
      ...toRefs(tableState),
      detail
    }
  }
})
</script>
