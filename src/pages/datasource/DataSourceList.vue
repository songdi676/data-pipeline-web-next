<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el
        label="数据源"
        icon="widgets"
        to="/datasource"
      />
    </q-breadcrumbs>
    <q-table
      wrap-cells
      title="数据源列表"
      :rows="rows"
      :columns="columns"
      row-key="cluster_id"
    >
      <template v-slot:body-cell-operate="props">
        <q-td :props="props">
          <div class=" q-gutter-sm">
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
  name: 'DataSourceList',
  setup () {
    const internalInstance = getCurrentInstance()
    const router = useRouter()
    const dataPipelineApi =
      internalInstance.appContext.config.globalProperties.$dataPipelineApi
    const tableState = reactive({
      columns: [
        {
          name: 'name',
          label: '名称',
          align: 'left',
          field: 'name'
        },
        {
          name: 'username',
          label: '用户名',
          align: 'left',
          field: 'username'
        },
        {
          name: 'url',
          label: 'URL',
          align: 'left',
          field: 'url'
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
      dataPipelineApi.dataPipeline.getDatasourceUsingGet().then((r) => {
        tableState.rows = r.data
      })
    }

    const detail = (row) => {
      router.push({ path: '/datasource-detail', query: { dbname: row.name, schema: row.schemaName } })
    }

    return {
      ...toRefs(tableState),
      detail
    }
  }
})
</script>
