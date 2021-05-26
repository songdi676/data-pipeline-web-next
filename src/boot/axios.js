import { boot } from 'quasar/wrappers'
import axios from 'axios'

import {Api,HttpClient} from "src/api/DataPipeline.js"
import {Api as KafkaApi,HttpClient as KafkaHttp} from "src/api/KafkaRest.js"
import {Api as KafdropApi,HttpClient as KafdropHttp} from "src/api/Kafdrop.js"


const api = axios.create({ baseURL: '' })
const httpClient = new HttpClient({ baseURL: '/' })
const dataPipelineApi = new Api(httpClient)
const kafkaHttp = new KafkaHttp({ baseURL: '/kafka-rest/v3' })
const kafkaApi = new KafkaApi(kafkaHttp)
const kafdropHttp = new KafdropHttp({ baseURL: '/kafdrop' })
const kafdropApi = new KafdropApi(kafdropHttp)
export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  app.config.globalProperties.$dataPipelineApi = dataPipelineApi
  app.config.globalProperties.$kafkaApi = kafkaApi
  app.config.globalProperties.$kafdropApi = kafdropApi
})

export { axios, api }
