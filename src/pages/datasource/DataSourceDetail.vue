<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el
        label="数据源详情"
        icon="widgets"
        to="/datasource"
      />
    </q-breadcrumbs>
    <q-table
      wrap-cells
      dense
      title="Table"
      :rows="rows"
      :columns="columns"
      row-key="cluster_id"
    >
      <template v-slot:body-cell-operate="props">
        <q-td :props="props">
            <q-btn   color="primary" label="详情" @click="detail(props.row)" />

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
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'DataSourceDetail',
  setup () {
    const internalInstance = getCurrentInstance()
    const router = useRouter()
    const route = useRoute()
    const { dbname, schema } = route.query
    const dataPipelineApi =
      internalInstance.appContext.config.globalProperties.$dataPipelineApi
    const tableState = reactive({
      columns: [
        {
          name: 'tableName',
          label: '名称',
          align: 'left',
          field: 'tableName'
        },
        {
          name: 'numRows',
          label: '数据量',
          align: 'left',
          field: 'numRows'
        },
        {
          name: 'remarks',
          label: '备注',
          align: 'left',
          field: 'remarks'
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
      query(dbname, schema)
    })
    const query = (dbname, schema) => {
      dataPipelineApi.dataPipeline.getTableInfoListUsingGet(dbname, schema).then((r) => {
        tableState.rows = r.data
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
