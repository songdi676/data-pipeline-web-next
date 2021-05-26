<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el
        label="连接器集群"
        icon="widgets"
        to="/connect-clusters"
      />
    </q-breadcrumbs>
    <q-table
      title="连接器集群"
      :rows="data"
      :columns="columns"
      row-key="groupId"
    >
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-badge
              :key="index"
              v-for="(item, index) in props.row.status.conditions"
              color="purple"
              :label="item.type"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-operate="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              color="red"
              label="删除"
              @click="deleteConnectCluster(props.row)"
            />
            <q-btn color="primary" label="详情" @click="toDetail(props.row)" />
          </div>
        </q-td>
      </template>
      <template v-slot:top>
        <q-btn color="primary" label="添加集群" @click="addConnectCluster" />
        <q-space />
        <q-input dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
    <q-dialog v-model="addConnectDialog" persistent>
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">添加集群</div>
        </q-card-section>
        <q-form @submit="onSubmitAdd" @reset="onResetAdd" class="q-gutter-md">
          <q-input
            filled
            v-model="addForm.groupId"
            label="集群名称"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '请输入集群名称']"
          />
          <q-input
            filled
            v-model="addForm.bootstrapServers"
            label="Kafka地址"
            hint="如：10.1.8.15:9092"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '请输入Kafka地址']"
          />

          <q-input
            filled
            type="number"
            v-model="addForm.replicas"
            label="实例数"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || '请输入集群实例数',
              (val) => (val > 0 && val < 100) || 'Please type a real age',
            ]"
          />
          <div class="q-pa-md q-gutter-sm">
            <q-btn label="提交" type="submit" color="primary" />
            <q-btn
              label="取消"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
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
  toRefs,
} from "vue";
import {
  ConnectClustersControllerService,
  serviceOptions,
} from "src/api/data-pipeline/indexv3";
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from "quasar";
export default defineComponent({
  name: "ConnectClustersList",
  setup() {
    const internalInstance = getCurrentInstance();
    const router = useRouter()
    const $q = useQuasar();
    serviceOptions.axios =
      internalInstance.appContext.config.globalProperties.$api;
    const  dataPipelineApi =
      internalInstance.appContext.config.globalProperties.$dataPipelineApi;
    onMounted(() => {
      query();
    });

    const state = reactive({
      columns: [
        {
          name: "groupId",
          label: "连接器集群名称",
          align: "left",
          field: (row) => row.metadata.name,
        },
        {
          name: "Pods()",
          align: "left",
          label: "Pods",
          field: (row) =>
            row.status.availableReplicas + "/" + row.status.replicas,
        },
        {
          name: "replicas",
          label: "运行实例数",
          field: (row) => row.spec.replicas,
        },
        {
          name: "creationTimestamp",
          label: "时间",
          field: (row) => row.metadata.creationTimestamp,
        },
        {
          name: "status",
          label: "状态",
          field: (row) => row.status.conditions,
        },
        {
          name: "operate",
          label: "操作",
        },
      ],
      data: [],
      filter: "",
    });

    const addState = reactive({
      addConnectDialog: false,
      addForm: {
        bootstrapServers: "",
        replicas: 1,
        groupId: "",
      },
    });

    const query = () => {
      dataPipelineApi.dataPipeline.getClustersUsingGet().then((r) => {
        state.data = r.data;
      });
   
    };
     const toDetail = (row) => {
       let groupId = row.metadata.name.replace("connect-", "");
      router.push({ path: '/connect-detail', query: { groupId }  })
    };

    
    const addConnectCluster = () => {
      addState.addConnectDialog = true;
    };
    const onSubmitAdd = () => {
      ConnectClustersControllerService.connectClusters({
        body: addState.addForm,
      }).then((r) => {
        addState.addConnectDialog = false;
        $q.notify("添加成功");
        query();
      });
    };
    const onResetAdd = () => {
      addState.addConnectDialog = false;
    };
    const deleteConnectCluster = (row) => {
      let groupId = row.metadata.name.replace("connect-", "");
      $q.dialog({
        title: "确认",
        message: `确认删除${groupId}连接器集群？`,
        cancel: true,
        persistent: true,
        bgColor: "purple",
      }).onOk(() => {
        // console.log('>>>> OK')
        ConnectClustersControllerService.connectClusters1({
          groupId: groupId,
        }).then((r) => {
          $q.notify("删除成功");
          query();
        });
      });
    };

    return {
      ...toRefs(state),
      ...toRefs(addState),
      toDetail,
      addConnectCluster,
      onSubmitAdd,
      onResetAdd,
      deleteConnectCluster,
    };
  },
});
</script>
