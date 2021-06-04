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
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://10.1.8.33:32310" });
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
 * @title Api Documentation
 * @version 1.0
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 * @termsOfService urn:tos
 * @baseUrl http://10.1.8.33:32310
 * @contact
 *
 * Api Documentation
 */
export class Api {
  constructor(http) {
    this.http = http;
    this.error = {
      /**
       * No description
       *
       * @tags basic-error-controller
       * @name ErrorHtmlUsingGet
       * @summary errorHtml
       * @request GET:/error
       * @response `200` `ModelAndView` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      errorHtmlUsingGet: (params = {}) =>
        this.http.request({
          path: `/error`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags basic-error-controller
       * @name ErrorHtmlUsingPut
       * @summary errorHtml
       * @request PUT:/error
       * @response `200` `ModelAndView` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      errorHtmlUsingPut: (params = {}) =>
        this.http.request({
          path: `/error`,
          method: "PUT",
          ...params,
        }),
      /**
       * No description
       *
       * @tags basic-error-controller
       * @name ErrorHtmlUsingPost
       * @summary errorHtml
       * @request POST:/error
       * @response `200` `ModelAndView` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      errorHtmlUsingPost: (params = {}) =>
        this.http.request({
          path: `/error`,
          method: "POST",
          ...params,
        }),
      /**
       * No description
       *
       * @tags basic-error-controller
       * @name ErrorHtmlUsingDelete
       * @summary errorHtml
       * @request DELETE:/error
       * @response `200` `ModelAndView` OK
       * @response `204` `void` No Content
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       */
      errorHtmlUsingDelete: (params = {}) =>
        this.http.request({
          path: `/error`,
          method: "DELETE",
          ...params,
        }),
      /**
       * No description
       *
       * @tags basic-error-controller
       * @name ErrorHtmlUsingOptions
       * @summary errorHtml
       * @request OPTIONS:/error
       * @response `200` `ModelAndView` OK
       * @response `204` `void` No Content
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       */
      errorHtmlUsingOptions: (params = {}) =>
        this.http.request({
          path: `/error`,
          method: "OPTIONS",
          ...params,
        }),
      /**
       * No description
       *
       * @tags basic-error-controller
       * @name ErrorHtmlUsingHead
       * @summary errorHtml
       * @request HEAD:/error
       * @response `200` `ModelAndView` OK
       * @response `204` `void` No Content
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       */
      errorHtmlUsingHead: (params = {}) =>
        this.http.request({
          path: `/error`,
          method: "HEAD",
          ...params,
        }),
      /**
       * No description
       *
       * @tags basic-error-controller
       * @name ErrorHtmlUsingPatch
       * @summary errorHtml
       * @request PATCH:/error
       * @response `200` `ModelAndView` OK
       * @response `204` `void` No Content
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       */
      errorHtmlUsingPatch: (params = {}) =>
        this.http.request({
          path: `/error`,
          method: "PATCH",
          ...params,
        }),
      /**
       * No description
       *
       * @tags basic-error-controller
       * @name ErrorHtmlUsingTrace
       * @summary errorHtml
       * @request TRACE:/error
       * @response `200` `ModelAndView` OK
       * @response `204` `void` No Content
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       */
      errorHtmlUsingTrace: (params = {}) =>
        this.http.request({
          path: `/error`,
          method: "TRACE",
          ...params,
        }),
    };
    this.dataPipeline = {
      /**
       * No description
       *
       * @tags connect-clusters-controller
       * @name AddClustersUsingPost
       * @summary addClusters
       * @request POST:/data-pipeline/connect-clusters
       * @response `200` `ConfigKeyInfo` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      addClustersUsingPost: (data, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connect-clusters`,
          method: "POST",
          body: data,
          type: ContentType.Json,
          ...params,
        }),
      /**
       * No description
       *
       * @tags connect-clusters-controller
       * @name GetClustersUsingGet
       * @summary getClusters
       * @request GET:/data-pipeline/connect-clusters/list
       * @response `200` `(Deployment)[]` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getClustersUsingGet: (params = {}) =>
        this.http.request({
          path: `/data-pipeline/connect-clusters/list`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connect-clusters-controller
       * @name DeleteClustersUsingDelete
       * @summary deleteClusters
       * @request DELETE:/data-pipeline/connect-clusters/{groupId}
       * @response `200` `ConfigKeyInfo` OK
       * @response `204` `void` No Content
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       */
      deleteClustersUsingDelete: (groupId, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connect-clusters/${groupId}`,
          method: "DELETE",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name ListConnectorsExpandUsingGet
       * @summary listConnectorsExpand
       * @request GET:/data-pipeline/connectors/expand/{cluster}
       * @response `200` `(ConnectorDetail)[]` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      listConnectorsExpandUsingGet: (cluster, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/expand/${cluster}`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name ListConnectorsUsingGet
       * @summary listConnectors
       * @request GET:/data-pipeline/connectors/{cluster}
       * @response `200` `(string)[]` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      listConnectorsUsingGet: (cluster, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name GetConnectorPluginsUsingGet
       * @summary getConnectorPlugins
       * @request GET:/data-pipeline/connectors/{cluster}/connector-plugins
       * @response `200` `(ConnectorPlugin)[]` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getConnectorPluginsUsingGet: (cluster, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}/connector-plugins`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name ValidateConfigsUsingPut
       * @summary validateConfigs
       * @request PUT:/data-pipeline/connectors/{cluster}/connector-plugins/{connectorType}/config/validate
       * @response `200` `ConfigInfos` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      validateConfigsUsingPut: (cluster, connectorType, query, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}/connector-plugins/${connectorType}/config/validate`,
          method: "PUT",
          query: query,
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name GetConnectorInfoUsingGet
       * @summary getConnectorInfo
       * @request GET:/data-pipeline/connectors/{cluster}/{connectorname}
       * @response `200` `ConnectorInfo` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getConnectorInfoUsingGet: (cluster, connectorname, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}/${connectorname}`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name GetConnectorConfigUsingGet
       * @summary getConnectorConfig
       * @request GET:/data-pipeline/connectors/{cluster}/{connectorname}/config
       * @response `200` `Record<string, string>` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getConnectorConfigUsingGet: (cluster, connectorname, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}/${connectorname}/config`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name PutConnectorConfigUsingPut
       * @summary putConnectorConfig
       * @request PUT:/data-pipeline/connectors/{cluster}/{connectorname}/config
       * @response `200` `ConfigKeyInfo` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      putConnectorConfigUsingPut: (cluster, connectorname, query, data, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}/${connectorname}/config`,
          method: "PUT",
          query: query,
          body: data,
          type: ContentType.Json,
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name GetSingleConnectorStatusUsingGet
       * @summary getSingleConnectorStatus
       * @request GET:/data-pipeline/connectors/{cluster}/{connectorname}/status
       * @response `200` `ConnectConnectorStatusResponse` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getSingleConnectorStatusUsingGet: (cluster, connectorname, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}/${connectorname}/status`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name GetConnectorTasksStatusUsingGet
       * @summary getConnectorTasksStatus
       * @request GET:/data-pipeline/connectors/{cluster}/{connectorname}/task/{tasknumber}/status
       * @response `200` `ConnectTaskStatus` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getConnectorTasksStatusUsingGet: (cluster, connectorname, tasknumber, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}/${connectorname}/task/${tasknumber}/status`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-controller
       * @name GetConnectorTasksUsingGet
       * @summary getConnectorTasks
       * @request GET:/data-pipeline/connectors/{cluster}/{connectorname}/tasks
       * @response `200` `ConnectTasksResponse` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getConnectorTasksUsingGet: (cluster, connectorname, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connectors/${cluster}/${connectorname}/tasks`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-lifecycle-controller
       * @name CreateConnectorUsingPost
       * @summary createConnector
       * @request POST:/data-pipeline/connector/{cluster}/{connector-type-id}
       * @response `200` `ConfigKeyInfo` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      createConnectorUsingPost: (cluster, connectorTypeId, data, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connector/${cluster}/${connectorTypeId}`,
          method: "POST",
          body: data,
          type: ContentType.Json,
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-lifecycle-controller
       * @name DeleteConnectorUsingDelete
       * @summary deleteConnector
       * @request DELETE:/data-pipeline/connector/{cluster}/{connectorname}
       * @response `200` `ConfigKeyInfo` OK
       * @response `204` `void` No Content
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       */
      deleteConnectorUsingDelete: (cluster, connectorname, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connector/${cluster}/${connectorname}`,
          method: "DELETE",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-lifecycle-controller
       * @name PauseConnectorUsingPut
       * @summary pauseConnector
       * @request PUT:/data-pipeline/connector/{cluster}/{connectorname}/pause
       * @response `200` `ConfigKeyInfo` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      pauseConnectorUsingPut: (cluster, connectorname, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connector/${cluster}/${connectorname}/pause`,
          method: "PUT",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-lifecycle-controller
       * @name RestartConnectorUsingPost
       * @summary restartConnector
       * @request POST:/data-pipeline/connector/{cluster}/{connectorname}/restart
       * @response `200` `ConfigKeyInfo` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      restartConnectorUsingPost: (cluster, connectorname, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connector/${cluster}/${connectorname}/restart`,
          method: "POST",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-lifecycle-controller
       * @name ResumeConnectorUsingPut
       * @summary resumeConnector
       * @request PUT:/data-pipeline/connector/{cluster}/{connectorname}/resume
       * @response `200` `ConfigKeyInfo` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      resumeConnectorUsingPut: (cluster, connectorname, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connector/${cluster}/${connectorname}/resume`,
          method: "PUT",
          ...params,
        }),
      /**
       * No description
       *
       * @tags connectors-lifecycle-controller
       * @name RestartTaskUsingPost
       * @summary restartTask
       * @request POST:/data-pipeline/connector/{cluster}/{connectorname}/task/{tasknumber}/restart
       * @response `200` `ConfigKeyInfo` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      restartTaskUsingPost: (cluster, connectorname, tasknumber, params = {}) =>
        this.http.request({
          path: `/data-pipeline/connector/${cluster}/${connectorname}/task/${tasknumber}/restart`,
          method: "POST",
          ...params,
        }),
      /**
       * No description
       *
       * @tags data-source-controller
       * @name AddDataSourceUsingPost
       * @summary addDataSource
       * @request POST:/data-pipeline/datasource
       * @response `200` `ConfigKeyInfo` OK
       * @response `201` `void` Created
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      addDataSourceUsingPost: (data, params = {}) =>
        this.http.request({
          path: `/data-pipeline/datasource`,
          method: "POST",
          body: data,
          type: ContentType.Json,
          ...params,
        }),
      /**
       * No description
       *
       * @tags data-source-controller
       * @name GetDatasourceUsingGet
       * @summary getDatasource
       * @request GET:/data-pipeline/datasource/list
       * @response `200` `(DataSourceVo)[]` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getDatasourceUsingGet: (params = {}) =>
        this.http.request({
          path: `/data-pipeline/datasource/list`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags data-source-controller
       * @name DeleteDataSourceUsingDelete
       * @summary deleteDataSource
       * @request DELETE:/data-pipeline/datasource/{name}
       * @response `200` `ConfigKeyInfo` OK
       * @response `204` `void` No Content
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       */
      deleteDataSourceUsingDelete: (name, params = {}) =>
        this.http.request({
          path: `/data-pipeline/datasource/${name}`,
          method: "DELETE",
          ...params,
        }),
      /**
       * No description
       *
       * @tags data-source-controller
       * @name FetchStatReplicationInfoUsingGet
       * @summary fetchStatReplicationInfo
       * @request GET:/data-pipeline/datasource/{name}/replication-stat/list
       * @response `200` `(ReplicationStat)[]` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      fetchStatReplicationInfoUsingGet: (name, query, params = {}) =>
        this.http.request({
          path: `/data-pipeline/datasource/${name}/replication-stat/list`,
          method: "GET",
          query: query,
          ...params,
        }),
      /**
       * No description
       *
       * @tags data-source-controller
       * @name FetchAllReplicationSlotInfoUsingGet
       * @summary fetchAllReplicationSlotInfo
       * @request GET:/data-pipeline/datasource/{name}/slot/list
       * @response `200` `(ReplicationSlot)[]` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      fetchAllReplicationSlotInfoUsingGet: (name, params = {}) =>
        this.http.request({
          path: `/data-pipeline/datasource/${name}/slot/list`,
          method: "GET",
          ...params,
        }),
      /**
       * No description
       *
       * @tags data-source-controller
       * @name GetTableInfoListUsingGet
       * @summary getTableInfoList
       * @request GET:/data-pipeline/datasource/{name}/{schema}/table/list
       * @response `200` `(Table)[]` OK
       * @response `401` `void` Unauthorized
       * @response `403` `void` Forbidden
       * @response `404` `void` Not Found
       */
      getTableInfoListUsingGet: (name, schema, params = {}) =>
        this.http.request({
          path: `/data-pipeline/datasource/${name}/${schema}/table/list`,
          method: "GET",
          ...params,
        }),
    };
  }
}
