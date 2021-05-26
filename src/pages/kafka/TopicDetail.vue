<template>
  <div>
    <q-table
      wrap-cells
      title="分区"
      :rows="partitionRows"
      :columns="partitionColumns"
      row-key="consumer_group_id"
    >
      <template v-slot:body-cell-operate="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" label="详情" />
          </div>
        </q-td>
      </template>
    </q-table>
    <q-table
      wrap-cells
      title="消费者"
      :rows="consumerRows"
      :columns="consumerColumns"
      row-key="groupId"
    >
      <template v-slot:body-cell-operate="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" label="详情" />
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
  toRefs,
} from "vue";
export default defineComponent({
  name: "TopicDetail",
  props: {
    detailInfo: {
      type: Object,
    },
  },
  setup(props, ctx) {
    const internalInstance = getCurrentInstance();
    const kafdropApi =
      internalInstance.appContext.config.globalProperties.$kafdropApi;
    onMounted(() => {
      getConsumers(props.detailInfo.name);
    });
    const partitionState = reactive({
      partitionColumns: [
        {
          name: "id",
          label: "Partition",
          align: "left",
          field: "id",
        },
        {
          name: "First Offset",
          label: "First Offset",
          align: "left",
          field: "firstOffset",
        },
        {
          name: "Last Offset",
          label: "Last Offset",
          align: "left",
          field: "size",
        },
        {
          name: "Size",
          label: "Size",
          align: "left",
          field: (row) => row.size - row.firstOffset,
        },
        {
          name: "Leader Node",
          label: "Leader Node",
          align: "left",
          field: (row) => row.leader.id,
        },
        {
          name: "Replica Node",
          label: "Replica Node",
          align: "left",
          field: (row) => row.replicas.map((i) => i.id).join(","),
        },
        {
          name: "In-sync Replica Nodes",
          label: "In-sync Replica Nodes",
          align: "left",
          field: (row) => row.inSyncReplicas.map((i) => i.id).join(","),
        },
        {
          name: "Offline Replica Nodes",
          label: "Offline Replica Nodes",
          align: "left",
          field: (row) => row.offlineReplicas.map((i) => i.id).join(","),
        },
        {
          name: "Preferred Leader",
          label: "Preferred Leader",
          align: "left",
          field: "leaderPreferred",
        },
        {
          name: "Under-replicated",
          label: "Under-replicated",
          align: "left",
          field: "underReplicated",
        },
        {
          name: "operate",
          align: "left",
          label: "操作",
        },
      ],
      partitionRows: props.detailInfo.partitions,
    });
    const consumerState = reactive({
      consumerColumns: [
        {
          name: "groupId",
          label: "groupId",
          align: "left",
          field: "groupId",
        },
        {
          name: "topic",
          label: "topic",
          align: "left",
          field: "topic",
        },
        {
          name: "lag",
          label: "Combined Lag",
          align: "left",
          field: "lag",
        },
        {
          name: "partitionId",
          label: "partitionId",
          align: "left",
          field: "partitionId",
        },
        {
          name: "partitionLag",
          label: "partitionLag",
          align: "left",
          field: "partitionLag",
        },
        {
          name: "operate",
          align: "left",
          label: "操作",
        },
      ],
      consumerRows: [],
    });
    const getConsumers = (name) => {
      kafdropApi.topic.getConsumersUsingGet(name).then((r) => {
        let consumerRows = [];
        r.data.forEach((g) => {
           g.topics.forEach((t) => {
            t.partitions.forEach((p) => {
              let consumer = {
                groupId: g.groupId,
                lag: t.lag,
                topic:t.topic,
                partitionId: p.partitionId,
                partitionLag: p.lag,
              };
              consumerRows.push(consumer);
            });
          });
        });
        consumerState.consumerRows = consumerRows;
      });
    };
    return {
      ...toRefs(partitionState),
      ...toRefs(consumerState),
    };
  },
});
</script>
