<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Kafka" icon="widgets" to="/kafka" />
      <q-breadcrumbs-el label="集群详情" icon="widgets" to="/kafka-clusters" />
    </q-breadcrumbs>
    <q-card>
      <q-card-section>
        <div class="text-h6">配置信息:{{ detailInfo.name }}</div>
        <div class="row wrap">
          <q-item
            tag="a"
            class="col-3"
            v-for="(value, key) in detailInfo.config"
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
    <div>
      <q-card>
        <q-tabs
          v-model="tabName"
          dense
          align="left"
          class="bg-primary text-white shadow-2"
          :breakpoint="0"
        >
          <q-tab name="Brokers" label="Brokers" />
          <q-tab name="Topics" label="Topics" />
          <q-tab name="Consumer" label="Consumer" />
        </q-tabs>
        <q-tab-panels v-model="tabName" animated>
          <q-tab-panel name="Brokers">
            <q-table
              flat
              wrap-cells
              :rows="brokersRows"
              :columns="brokersColumns"
              row-key="broker_id"
            >
              <template v-slot:body-cell-operate="props">
                <q-td :props="props">
                  <div class="q-pa-md q-gutter-sm">
                    <q-btn color="primary" label="详情" />
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-tab-panel>

          <q-tab-panel name="Topics">
            <q-table
              flat
              wrap-cells
              :rows="rows"
              :columns="columns"
              row-key="topic_name"
            >
              <template v-slot:body-cell-operate="props">
                <q-td :props="props">
                  <div class="q-pa-md q-gutter-sm">
                    <q-btn color="primary" label="详情" @click="topicDetail(props.row)"/>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-tab-panel>
          <q-tab-panel name="Consumer">
            <q-table
              flat
              wrap-cells
              :rows="consumerRows"
              :columns="consumerColumns"
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
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <q-dialog v-model="topicDetailDialog">
      <q-card style="width: 80vw; max-width: 80vw;">
        <TopicDetail :detailInfo="topicDetailInfo"/>
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
import { useRoute } from 'vue-router'
import TopicDetail from 'src/pages/kafka/TopicDetail'

export default defineComponent({
  name: 'KafkaClusterDetail',
  components: { TopicDetail },
  setup (props) {
    const internalInstance = getCurrentInstance()
    const route = useRoute()
    const { clusterId } = route.query
    const kafkaApi =
      internalInstance.appContext.config.globalProperties.$kafkaApi
    const kafdropApi =
      internalInstance.appContext.config.globalProperties.$kafdropApi
    onMounted(() => {
      topicList()
      getBrokers()
      getConsumer()
    })
    const tableState = reactive({
      columns: [
        {
          name: 'name',
          label: 'Topic名称',
          align: 'left',
          field: 'name'
        },
        {
          name: 'Partitions',
          label: 'Partitions',
          align: 'left',
          field: (row) => row.partitions.length
        },
        {
          name: 'operate',
          align: 'left',
          label: '操作'
        }
      ],
      rows: []
    })
    const tabState = reactive({
      tabName: 'Brokers'
    })
    const detailInfoState = reactive({
      detailInfo: { name: 'sss', config: { topicNum: 0 } }
    })

    const topicList = (row) => {
      // kafkaApi.clusters.topicsDetail(clusterId).then((r) => {
      //   tableState.rows = r.data.data;
      //   detailInfoState.detailInfo.config.topicNum = r.data.data.length;
      // });
      kafdropApi.topic.getAllTopicsUsingGet1().then((r) => {
        tableState.rows = r.data
        detailInfoState.detailInfo.config.topicNum = r.data.length
      })
    }
    const brokerstableState = reactive({
      brokersColumns: [
        {
          name: 'broker_id',
          label: 'ID',
          align: 'left',
          field: 'broker_id'
        },
        {
          name: 'kind',
          label: '类型',
          align: 'left',
          field: 'kind'
        },
        {
          name: 'host',
          label: 'Host',
          align: 'left',
          field: 'host'
        },
        {
          name: 'port',
          label: 'Port',
          align: 'left',
          field: 'port'
        },
        {
          name: 'operate',
          align: 'left',
          label: '操作'
        }
      ],
      brokersRows: []
    })
    const getBrokers = (row) => {
      kafkaApi.clusters.brokersDetail(clusterId).then((r) => {
        brokerstableState.brokersRows = r.data.data
      })
    }
    const consumertableState = reactive({
      consumerColumns: [
        {
          name: 'consumer_group_id',
          label: 'ConsumerGroup',
          align: 'left',
          field: 'consumer_group_id'
        },
        {
          name: 'kind',
          label: '类型',
          align: 'left',
          field: 'kind'
        },
        {
          name: 'state',
          label: 'state',
          align: 'left',
          field: 'state'
        },
        {
          name: 'operate',
          align: 'left',
          label: '操作'
        }
      ],
      consumerRows: []
    })
    const getConsumer = (row) => {
      kafkaApi.clusters.consumerGroupsDetail(clusterId).then((r) => {
        consumertableState.consumerRows = r.data.data
      })
    }

    const topicDetailState = reactive({
      topicDetailInfo: {},
      topicDetailDialog: false
    })
    const topicDetail = (row) => {
      topicDetailState.topicDetailInfo = row
      topicDetailState.topicDetailDialog = true
    }

    return {
      ...toRefs(tableState),
      ...toRefs(detailInfoState),
      ...toRefs(brokerstableState),
      ...toRefs(tabState),
      ...toRefs(consumertableState),
      ...toRefs(topicDetailState),
      topicList,
      topicDetail
    }
  }
})
</script>
