
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/connect-clusters', component: () => import('pages/connect/ConnectClustersList.vue') },
      { path: '/connect-detail', component: () => import('pages/connect/ConnectClusterDetail.vue') },
      { path: '/kafka', component: () => import('pages/kafka/Kafka.vue') },
      { path: '/kafka-detail', component: () => import('pages/kafka/KafkaClusterDetail.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
