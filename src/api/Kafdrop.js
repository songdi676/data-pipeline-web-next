/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import axios from "axios";
export var ContentType;
(function (ContentType) {
  ContentType["Json"] = "application/json";
  ContentType["FormData"] = "multipart/form-data";
  ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
  constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
    this.securityData = null;
    this.setSecurityData = (data) => {
      this.securityData = data;
    };
    this.request = async ({ secure, path, type, query, format, body, ...params }) => {
      const secureParams =
        ((typeof secure === "boolean" ? secure : this.secure) &&
          this.securityWorker &&
          (await this.securityWorker(this.securityData))) ||
        {};
      const requestParams = this.mergeRequestParams(params, secureParams);
      requestParams.headers.common = { Accept: "application/json" };
      const responseFormat = (format && this.format) || void 0;
      if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
        requestParams.headers.common = { Accept: "*/*" };
        requestParams.headers.post = {};
        requestParams.headers.put = {};
        const formData = new FormData();
        for (const key in body) {
          formData.append(key, body[key]);
        }
        body = formData;
      }
      return this.instance.request({
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
          ...(requestParams.headers || {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      });
    };
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "//10.1.8.33:32319" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }
  mergeRequestParams(params1, params2) {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }
}
/**
 * @title Kafdrop API
 * @baseUrl //10.1.8.33:32319
 *
 * JSON APIs for Kafdrop
 */
export class Api {
  constructor(http) {
    this.http = http;
    /**
     * @description Get high level broker, topic, and partition data for the Kafka cluster
     *
     * @tags cluster-controller
     * @name GetClusterUsingGet
     * @summary getCluster
     * @request GET:/
     * @response `200` `ClusterInfoVO` Success
     */
    this.getClusterUsingGet = (params = {}) =>
      this.http.request({
        path: `/`,
        method: "GET",
        format: "json",
        ...params,
      });
    this.acl = {
      /**
       * @description Get list of all acls
       *
       * @tags acl-controller
       * @name GetAllTopicsUsingGet
       * @summary getAllAcls
       * @request GET:/acl
       * @response `200` `(string)[]` Success
       */
      getAllTopicsUsingGet: (params = {}) =>
        this.http.request({
          path: `/acl`,
          method: "GET",
          format: "json",
          ...params,
        }),
    };
    this.broker = {
      /**
       * @description Get details for all known Kafka brokers
       *
       * @tags broker-controller
       * @name BrokerDetailsJsonUsingGet1
       * @summary getAllBrokers
       * @request GET:/broker
       * @response `200` `BrokerVO` Success
       */
      brokerDetailsJsonUsingGet1: (params = {}) =>
        this.http.request({
          path: `/broker`,
          method: "GET",
          format: "json",
          ...params,
        }),
      /**
       * @description Get details for a specific Kafka broker
       *
       * @tags broker-controller
       * @name BrokerDetailsJsonUsingGet
       * @summary getBroker
       * @request GET:/broker/{id}
       * @response `200` `BrokerVO` Success
       * @response `404` `void` Invalid Broker ID
       */
      brokerDetailsJsonUsingGet: (id, params = {}) =>
        this.http.request({
          path: `/broker/${id}`,
          method: "GET",
          format: "json",
          ...params,
        }),
    };
    this.consumer = {
      /**
       * @description Get topic and partition details for a consumer group
       *
       * @tags consumer-controller
       * @name GetConsumerUsingGet
       * @summary getConsumer
       * @request GET:/consumer/{groupId}
       * @response `200` `ConsumerVO` Success
       * @response `404` `void` Invalid consumer group
       */
      getConsumerUsingGet: (groupId, params = {}) =>
        this.http.request({
          path: `/consumer/${groupId}`,
          method: "GET",
          format: "json",
          ...params,
        }),
    };
    this.topic = {
      /**
       * @description Get list of all topics
       *
       * @tags topic-controller
       * @name GetAllTopicsUsingGet1
       * @summary getAllTopics
       * @request GET:/topic
       * @response `200` `(string)[]` Success
       */
      getAllTopicsUsingGet1: (params = {}) =>
        this.http.request({
          path: `/topic`,
          method: "GET",
          format: "json",
          ...params,
        }),
      /**
       * @description Create topic
       *
       * @tags topic-controller
       * @name CreateTopicUsingPost
       * @summary createTopic
       * @request POST:/topic
       * @response `200` `string` Success
       */
      createTopicUsingPost: (query, params = {}) =>
        this.http.request({
          path: `/topic`,
          method: "POST",
          query: query,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
      /**
       * @description Get details for a topic
       *
       * @tags topic-controller
       * @name GetTopicUsingGet
       * @summary getTopic
       * @request GET:/topic/{name}
       * @response `200` `TopicVO` Success
       * @response `404` `void` Invalid topic name
       */
      getTopicUsingGet: (name, params = {}) =>
        this.http.request({
          path: `/topic/${name}`,
          method: "GET",
          format: "json",
          ...params,
        }),
      /**
       * @description Get consumers for a topic
       *
       * @tags topic-controller
       * @name GetConsumersUsingGet
       * @summary getConsumers
       * @request GET:/topic/{name}/consumers
       * @response `200` `(string)[]` Success
       * @response `404` `void` Invalid topic name
       */
      getConsumersUsingGet: (name, params = {}) =>
        this.http.request({
          path: `/topic/${name}/consumers`,
          method: "GET",
          format: "json",
          ...params,
        }),
      /**
       * @description Get offset or message data for a topic. Without query params returns all partitions with offset data. With query params, returns actual messages (if valid offsets are provided).
       *
       * @tags message-controller
       * @name GetPartitionOrMessagesUsingGet
       * @summary getPartitionOrMessages
       * @request GET:/topic/{name}/messages
       * @response `200` `(object)[]` Success
       * @response `404` `void` Invalid topic name
       */
      getPartitionOrMessagesUsingGet: (name, query, params = {}) =>
        this.http.request({
          path: `/topic/${name}/messages`,
          method: "GET",
          query: query,
          format: "json",
          ...params,
        }),
    };
  }
}
