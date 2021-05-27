<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
import { defineComponent, onMounted, getCurrentInstance } from 'vue'
import { ConnectClustersControllerService, serviceOptions } from 'src/api/data-pipeline/indexv3'

export default defineComponent({
  name: 'PageIndex'

})
</script>
