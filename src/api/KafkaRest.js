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

export var AclOperation;
(function (AclOperation) {
  AclOperation["UNKNOWN"] = "UNKNOWN";
  AclOperation["ANY"] = "ANY";
  AclOperation["ALL"] = "ALL";
  AclOperation["READ"] = "READ";
  AclOperation["WRITE"] = "WRITE";
  AclOperation["CREATE"] = "CREATE";
  AclOperation["DELETE"] = "DELETE";
  AclOperation["ALTER"] = "ALTER";
  AclOperation["DESCRIBE"] = "DESCRIBE";
  AclOperation["CLUSTER_ACTION"] = "CLUSTER_ACTION";
  AclOperation["DESCRIBE_CONFIGS"] = "DESCRIBE_CONFIGS";
  AclOperation["ALTER_CONFIGS"] = "ALTER_CONFIGS";
  AclOperation["IDEMPOTENT_WRITE"] = "IDEMPOTENT_WRITE";
})(AclOperation || (AclOperation = {}));
export var AclPatternType;
(function (AclPatternType) {
  AclPatternType["UNKNOWN"] = "UNKNOWN";
  AclPatternType["ANY"] = "ANY";
  AclPatternType["MATCH"] = "MATCH";
  AclPatternType["LITERAL"] = "LITERAL";
  AclPatternType["PREFIXED"] = "PREFIXED";
})(AclPatternType || (AclPatternType = {}));
export var AclPermission;
(function (AclPermission) {
  AclPermission["UNKNOWN"] = "UNKNOWN";
  AclPermission["ANY"] = "ANY";
  AclPermission["DENY"] = "DENY";
  AclPermission["ALLOW"] = "ALLOW";
})(AclPermission || (AclPermission = {}));
export var AclResourceType;
(function (AclResourceType) {
  AclResourceType["UNKNOWN"] = "UNKNOWN";
  AclResourceType["ANY"] = "ANY";
  AclResourceType["TOPIC"] = "TOPIC";
  AclResourceType["GROUP"] = "GROUP";
  AclResourceType["CLUSTER"] = "CLUSTER";
  AclResourceType["TRANSACTIONAL_ID"] = "TRANSACTIONAL_ID";
  AclResourceType["DELEGATION_TOKEN"] = "DELEGATION_TOKEN";
})(AclResourceType || (AclResourceType = {}));
export var ClusterConfigType;
(function (ClusterConfigType) {
  ClusterConfigType["BROKER"] = "BROKER";
})(ClusterConfigType || (ClusterConfigType = {}));
export var ConfigSource;
(function (ConfigSource) {
  ConfigSource["DYNAMIC_CLUSTER_LINK_CONFIG"] = "DYNAMIC_CLUSTER_LINK_CONFIG";
  ConfigSource["DYNAMIC_TOPIC_CONFIG"] = "DYNAMIC_TOPIC_CONFIG";
  ConfigSource["DYNAMIC_BROKER_LOGGER_CONFIG"] = "DYNAMIC_BROKER_LOGGER_CONFIG";
  ConfigSource["DYNAMIC_BROKER_CONFIG"] = "DYNAMIC_BROKER_CONFIG";
  ConfigSource["DYNAMIC_DEFAULT_BROKER_CONFIG"] = "DYNAMIC_DEFAULT_BROKER_CONFIG";
  ConfigSource["STATIC_BROKER_CONFIG"] = "STATIC_BROKER_CONFIG";
  ConfigSource["DEFAULT_CONFIG"] = "DEFAULT_CONFIG";
  ConfigSource["UNKNOWN"] = "UNKNOWN";
})(ConfigSource || (ConfigSource = {}));
export var ConsumerGroupState;
(function (ConsumerGroupState) {
  ConsumerGroupState["UNKNOWN"] = "UNKNOWN";
  ConsumerGroupState["PREPARING_REBALANCE"] = "PREPARING_REBALANCE";
  ConsumerGroupState["COMPLETING_REBALANCE"] = "COMPLETING_REBALANCE";
  ConsumerGroupState["STABLE"] = "STABLE";
  ConsumerGroupState["DEAD"] = "DEAD";
  ConsumerGroupState["EMPTY"] = "EMPTY";
})(ConsumerGroupState || (ConsumerGroupState = {}));
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
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "{protocol}://{address}:{port}/v3",
    });
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
 * @title Kafka HTTP API
 * @version 3.0.0
 * @baseUrl {protocol}://{address}:{port}/v3
 */
export class Api {
  constructor(http) {
    this.http = http;
    this.clusters = {
      /**
       * @description Returns a list of known Kafka clusters. Currently both Kafka and Kafka REST Proxy are only aware of the Kafka cluster pointed at by the ``bootstrap.servers`` configuration. Therefore only one Kafka cluster will be returned in the response.
       *
       * @tags Cluster
       * @name ClustersList
       * @summary List Clusters
       * @request GET:/clusters
       * @response `200` `ClusterDataList`
       */
      clustersList: (params = {}) =>
        this.http.request({
          path: `/clusters`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the Kafka cluster with the specified ``cluster_id``.
       *
       * @tags Cluster
       * @name ClustersDetail
       * @summary Get Cluster
       * @request GET:/clusters/{cluster_id}
       * @response `200` `ClusterData`
       */
      clustersDetail: (clusterId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns a list of ACLs that match the search criteria.
       *
       * @tags ACL
       * @name AclsDetail
       * @summary Search ACLs
       * @request GET:/clusters/{cluster_id}/acls
       * @response `200` `AclDataList`
       */
      aclsDetail: (clusterId, query, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/acls`,
          method: "GET",
          query: query,
          ...params,
        }),
      /**
       * @description Creates an ACL.
       *
       * @tags ACL
       * @name AclsCreate
       * @summary Create ACLs
       * @request POST:/clusters/{cluster_id}/acls
       * @response `201` `void` No Content
       */
      aclsCreate: (clusterId, data, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/acls`,
          method: "POST",
          body: data,
          ...params,
        }),
      /**
       * @description Deletes the list of ACLs that matches the search criteria.
       *
       * @tags ACL
       * @name AclsDelete
       * @summary Delete ACLs
       * @request DELETE:/clusters/{cluster_id}/acls
       * @response `200` `{ data: (AclData)[] }`
       */
      aclsDelete: (clusterId, query, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/acls`,
          method: "DELETE",
          query: query,
          ...params,
        }),
      /**
       * @description Returns a list of configuration parameters for the specified Kafka cluster.
       *
       * @tags Configs
       * @name BrokerConfigsDetail
       * @summary List Cluster Configs
       * @request GET:/clusters/{cluster_id}/broker-configs
       * @response `200` `ClusterConfigDataList`
       */
      brokerConfigsDetail: (clusterId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/broker-configs`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Updates or deletes a set of Kafka cluster configuration parameters.
       *
       * @tags Configs
       * @name BrokerConfigsAlterCreate
       * @summary Batch Alter Cluster Configs
       * @request POST:/clusters/{cluster_id}/broker-configs:alter
       * @response `204` `void` No Content
       */
      brokerConfigsAlterCreate: (clusterId, alter, data, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/broker-configs${alter}`,
          method: "POST",
          body: data,
          ...params,
        }),
      /**
       * @description Returns the configuration parameter specified by ``name``.
       *
       * @tags Configs
       * @name BrokerConfigsDetail2
       * @summary Get Cluster Config
       * @request GET:/clusters/{cluster_id}/broker-configs/{name}
       * @originalName brokerConfigsDetail
       * @duplicate
       * @response `200` `ClusterConfigData`
       */
      brokerConfigsDetail2: (clusterId, name, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/broker-configs/${name}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Updates the configuration parameter specified by ``name``.
       *
       * @tags Configs
       * @name BrokerConfigsUpdate
       * @summary Update Cluster Config
       * @request PUT:/clusters/{cluster_id}/broker-configs/{name}
       * @response `204` `void` No Content
       */
      brokerConfigsUpdate: (clusterId, name, data, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/broker-configs/${name}`,
          method: "PUT",
          body: data,
          ...params,
        }),
      /**
       * @description Resets the configuration parameter specified by ``name`` to its default value.
       *
       * @tags Configs
       * @name BrokerConfigsDelete
       * @summary Reset Cluster Config
       * @request DELETE:/clusters/{cluster_id}/broker-configs/{name}
       * @response `204` `void` No Content
       */
      brokerConfigsDelete: (clusterId, name, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/broker-configs/${name}`,
          method: "DELETE",
          ...params,
        }),
      /**
       * @description Return a list of brokers that belong to the specified Kafka cluster.
       *
       * @tags Broker
       * @name BrokersDetail
       * @summary List Brokers
       * @request GET:/clusters/{cluster_id}/brokers
       * @response `200` `BrokerDataList`
       */
      brokersDetail: (clusterId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the broker specified by ``broker_id``.
       *
       * @tags Broker
       * @name BrokersDetail2
       * @summary Get Broker
       * @request GET:/clusters/{cluster_id}/brokers/{broker_id}
       * @originalName brokersDetail
       * @duplicate
       * @response `200` `BrokerData`
       */
      brokersDetail2: (clusterId, brokerId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers/${brokerId}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Return the list of configuration parameters for all the brokers in the given Kafka cluster.
       *
       * @tags Configs
       * @name BrokersConfigsDetail
       * @summary List All Broker Configs
       * @request GET:/clusters/{cluster_id}/brokers/-/configs
       * @response `200` `BrokerConfigDataList`
       */
      brokersConfigsDetail: (clusterId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers/-/configs`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Return the list of configuration parameters that belong to the specified Kafka broker.
       *
       * @tags Configs
       * @name BrokersConfigsDetail2
       * @summary List Broker Configs
       * @request GET:/clusters/{cluster_id}/brokers/{broker_id}/configs
       * @originalName brokersConfigsDetail
       * @duplicate
       * @response `200` `BrokerConfigDataList`
       */
      brokersConfigsDetail2: (clusterId, brokerId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers/${brokerId}/configs`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Updates or deletes a set of broker configuration parameters.
       *
       * @tags Configs
       * @name BrokersConfigsAlterCreate
       * @summary Batch Alter Broker Configs
       * @request POST:/clusters/{cluster_id}/brokers/{broker_id}/configs:alter
       * @response `204` `void` No Content
       */
      brokersConfigsAlterCreate: (clusterId, brokerId, alter, data, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers/${brokerId}/configs${alter}`,
          method: "POST",
          body: data,
          ...params,
        }),
      /**
       * @description Return the configuration parameter specified by ``name``.
       *
       * @tags Configs
       * @name BrokersConfigsDetail3
       * @summary Get Broker Config
       * @request GET:/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}
       * @originalName brokersConfigsDetail
       * @duplicate
       * @response `200` `BrokerConfigData`
       */
      brokersConfigsDetail3: (clusterId, brokerId, name, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers/${brokerId}/configs/${name}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Updates the configuration parameter specified by ``name``.
       *
       * @tags Configs
       * @name BrokersConfigsUpdate
       * @summary Update Broker Config
       * @request PUT:/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}
       * @response `204` `void` No Content
       */
      brokersConfigsUpdate: (clusterId, brokerId, name, data, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers/${brokerId}/configs/${name}`,
          method: "PUT",
          body: data,
          ...params,
        }),
      /**
       * @description Resets the configuration parameter specified by ``name`` to its default value.
       *
       * @tags Configs
       * @name BrokersConfigsDelete
       * @summary Reset Broker Config
       * @request DELETE:/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}
       * @response `204` `void` No Content
       */
      brokersConfigsDelete: (clusterId, brokerId, name, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers/${brokerId}/configs/${name}`,
          method: "DELETE",
          ...params,
        }),
      /**
       * @description Returns the list of replicas assigned to the specified broker.
       *
       * @tags Broker, Replica
       * @name BrokersPartitionReplicasDetail
       * @summary Search Replicas by Broker
       * @request GET:/clusters/{cluster_id}/brokers/{broker_id}/partition-replicas
       * @response `200` `ReplicaDataList`
       */
      brokersPartitionReplicasDetail: (clusterId, brokerId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/brokers/${brokerId}/partition-replicas`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the list of consumer groups that belong to the specified Kafka cluster.
       *
       * @tags Consumer Group
       * @name ConsumerGroupsDetail
       * @summary List Consumer Groups
       * @request GET:/clusters/{cluster_id}/consumer-groups
       * @response `200` `ConsumerGroupDataList`
       */
      consumerGroupsDetail: (clusterId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the consumer group specified by the ``consumer_group_id``.
       *
       * @tags Consumer Group
       * @name ConsumerGroupsDetail2
       * @summary Get Consumer Group
       * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}
       * @originalName consumerGroupsDetail
       * @duplicate
       * @response `200` `ConsumerGroupData`
       */
      consumerGroupsDetail2: (clusterId, consumerGroupId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups/${consumerGroupId}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns a list of consumers that belong to the specified consumer group.
       *
       * @tags Consumer Group
       * @name ConsumerGroupsConsumersDetail
       * @summary List Consumers
       * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers
       * @response `200` `ConsumerDataList`
       */
      consumerGroupsConsumersDetail: (clusterId, consumerGroupId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups/${consumerGroupId}/consumers`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the max and total lag of the consumers belonging to the specified consumer group.
       *
       * @tags Consumer Group
       * @name ConsumerGroupsLagSummaryDetail
       * @summary Get Consumer Group Lag Summary.
       * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lag-summary
       * @response `200` `ConsumerGroupLagSummaryData`
       */
      consumerGroupsLagSummaryDetail: (clusterId, consumerGroupId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups/${consumerGroupId}/lag-summary`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns a list of consumer lags of the consumers belonging to the specified consumer group.
       *
       * @tags Consumer Group
       * @name ConsumerGroupsLagsDetail
       * @summary List Consumer Lags
       * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags
       * @response `200` `ConsumerLagDataList`
       */
      consumerGroupsLagsDetail: (clusterId, consumerGroupId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups/${consumerGroupId}/lags`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the consumer lag on a partition with the given `partition_id`.
       *
       * @tags Partition
       * @name ConsumerGroupsLagsPartitionsDetail
       * @summary Get Consumer Lag
       * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags/{topic_name}/partitions/{partition_id}
       * @response `200` `ConsumerLagData`
       */
      consumerGroupsLagsPartitionsDetail: (clusterId, consumerGroupId, topicName, partitionId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups/${consumerGroupId}/lags/${topicName}/partitions/${partitionId}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the consumer specified by the ``consumer_id``.
       *
       * @tags Consumer Group
       * @name ConsumerGroupsConsumersDetail2
       * @summary Get Consumer
       * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}
       * @originalName consumerGroupsConsumersDetail
       * @duplicate
       * @response `200` `ConsumerData`
       */
      consumerGroupsConsumersDetail2: (clusterId, consumerGroupId, consumerId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups/${consumerGroupId}/consumers/${consumerId}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns a list of partition assignments for the specified consumer.
       *
       * @tags Consumer Group
       * @name ConsumerGroupsConsumersAssignmentsDetail
       * @summary List Consumer Assignments
       * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments
       * @response `200` `ConsumerAssignmentDataList`
       */
      consumerGroupsConsumersAssignmentsDetail: (clusterId, consumerGroupId, consumerId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups/${consumerGroupId}/consumers/${consumerId}/assignments`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns information about the assignment for the specified consumer to the specified partition.
       *
       * @tags Consumer Group
       * @name ConsumerGroupsConsumersAssignmentsPartitionsDetail
       * @summary Get Consumer Assignment
       * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments/{topic_name}/partitions/{partition_id}
       * @response `200` `ConsumerAssignmentData`
       */
      consumerGroupsConsumersAssignmentsPartitionsDetail: (
        clusterId,
        consumerGroupId,
        consumerId,
        topicName,
        partitionId,
        params = {},
      ) =>
        this.http.request({
          path: `/clusters/${clusterId}/consumer-groups/${consumerGroupId}/consumers/${consumerId}/assignments/${topicName}/partitions/${partitionId}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the list of topics that belong to the specified Kafka cluster.
       *
       * @tags Topic
       * @name TopicsDetail
       * @summary List Topics
       * @request GET:/clusters/{cluster_id}/topics
       * @response `200` `TopicDataList`
       */
      topicsDetail: (clusterId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Creates a topic.
       *
       * @tags Topic
       * @name TopicsCreate
       * @summary Create Topic
       * @request POST:/clusters/{cluster_id}/topics
       * @response `201` `TopicData`
       */
      topicsCreate: (clusterId, data, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics`,
          method: "POST",
          body: data,
          ...params,
        }),
      /**
       * @description Returns the topic with the given `topic_name`.
       *
       * @tags Topic
       * @name TopicsDetail2
       * @summary Get Topic
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}
       * @originalName topicsDetail
       * @duplicate
       * @response `200` `TopicData`
       */
      topicsDetail2: (clusterId, topicName, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Deletes the topic with the given `topic_name`.
       *
       * @tags Topic
       * @name TopicsDelete
       * @summary Delete Topic
       * @request DELETE:/clusters/{cluster_id}/topics/{topic_name}
       * @response `204` `void` No Content
       */
      topicsDelete: (clusterId, topicName, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}`,
          method: "DELETE",
          ...params,
        }),
      /**
       * @description Return the list of configs that belong to the specified topic.
       *
       * @tags Configs
       * @name TopicsConfigsDetail
       * @summary List Topic Configs
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}/configs
       * @response `200` `TopicConfigDataList`
       */
      topicsConfigsDetail: (clusterId, topicName, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/configs`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Updates or deletes a set of topic configs.
       *
       * @tags Configs
       * @name TopicsConfigsAlterCreate
       * @summary Batch Alter Topic Configs
       * @request POST:/clusters/{cluster_id}/topics/{topic_name}/configs:alter
       * @response `204` `void` No Content
       */
      topicsConfigsAlterCreate: (clusterId, topicName, alter, data, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/configs${alter}`,
          method: "POST",
          body: data,
          ...params,
        }),
      /**
       * @description Return the config with the given `name`.
       *
       * @tags Configs
       * @name TopicsConfigsDetail2
       * @summary Get Topic Config
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}/configs/{name}
       * @originalName topicsConfigsDetail
       * @duplicate
       * @response `200` `TopicConfigData`
       */
      topicsConfigsDetail2: (clusterId, topicName, name, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/configs/${name}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Updates the config with given `name`.
       *
       * @tags Configs
       * @name TopicsConfigsUpdate
       * @summary Update Topic Config
       * @request PUT:/clusters/{cluster_id}/topics/{topic_name}/configs/{name}
       * @response `204` `void` No Content
       */
      topicsConfigsUpdate: (clusterId, topicName, name, data, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/configs/${name}`,
          method: "PUT",
          body: data,
          ...params,
        }),
      /**
       * @description Resets the config with given `name` to its default value.
       *
       * @tags Configs
       * @name TopicsConfigsDelete
       * @summary Reset Topic Config
       * @request DELETE:/clusters/{cluster_id}/topics/{topic_name}/configs/{name}
       * @response `204` `void` No Content
       */
      topicsConfigsDelete: (clusterId, topicName, name, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/configs/${name}`,
          method: "DELETE",
          ...params,
        }),
      /**
       * @description Returns the list of partitions that belong to the specified topic.
       *
       * @tags Partition
       * @name TopicsPartitionsDetail
       * @summary List Partitions
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}/partitions
       * @response `200` `PartitionDataList`
       */
      topicsPartitionsDetail: (clusterId, topicName, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/partitions`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the partition with the given `partition_id`.
       *
       * @tags Partition
       * @name TopicsPartitionsDetail2
       * @summary Get Partition
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}
       * @originalName topicsPartitionsDetail
       * @duplicate
       * @response `200` `PartitionData`
       */
      topicsPartitionsDetail2: (clusterId, topicName, partitionId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/partitions/${partitionId}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the list of all ongoing replica reassignments in the given Kafka cluster.
       *
       * @tags Partition
       * @name TopicsPartitionsReassignmentDetail
       * @summary List All Replica Reassignments
       * @request GET:/clusters/{cluster_id}/topics/-/partitions/-/reassignment
       * @response `200` `ReassignmentDataList`
       */
      topicsPartitionsReassignmentDetail: (clusterId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/-/partitions/-/reassignment`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the list of ongoing replica reassignments for the given topic.
       *
       * @tags Partition
       * @name TopicsPartitionsReassignmentDetail2
       * @summary Search Replica Reassignments By Topic
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}/partitions/-/reassignment
       * @originalName topicsPartitionsReassignmentDetail
       * @duplicate
       * @response `200` `ReassignmentDataList`
       */
      topicsPartitionsReassignmentDetail2: (clusterId, topicName, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/partitions/-/reassignment`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the list of ongoing replica reassignments for the given partition.
       *
       * @tags Partition
       * @name TopicsPartitionsReassignmentDetail3
       * @summary Get Replica Reassignments
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/reassignment
       * @originalName topicsPartitionsReassignmentDetail
       * @duplicate
       * @response `200` `ReassignmentData`
       */
      topicsPartitionsReassignmentDetail3: (clusterId, topicName, partitionId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/partitions/${partitionId}/reassignment`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the list of replicas for the specified partition.
       *
       * @tags Replica
       * @name TopicsPartitionsReplicasDetail
       * @summary List Replicas
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas
       * @response `200` `ReplicaDataList`
       */
      topicsPartitionsReplicasDetail: (clusterId, topicName, partitionId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/partitions/${partitionId}/replicas`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns the replica for the specified partition assigned to the specified broker.
       *
       * @tags Replica
       * @name TopicsPartitionsReplicasDetail2
       * @summary Get Replica
       * @request GET:/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas/{broker_id}
       * @originalName topicsPartitionsReplicasDetail
       * @duplicate
       * @response `200` `ReplicaData`
       */
      topicsPartitionsReplicasDetail2: (clusterId, topicName, partitionId, brokerId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/${topicName}/partitions/${partitionId}/replicas/${brokerId}`,
          method: "GET",
          ...params,
        }),
      /**
       * @description Returns all topic configurations for topics hosted by the specified cluster.
       *
       * @tags Configs
       * @name TopicsConfigsDetail3
       * @summary Get All Topic Configs
       * @request GET:/clusters/{cluster_id}/topics/-/configs
       * @originalName topicsConfigsDetail
       * @duplicate
       * @response `200` `TopicConfigDataList`
       */
      topicsConfigsDetail3: (clusterId, params = {}) =>
        this.http.request({
          path: `/clusters/${clusterId}/topics/-/configs`,
          method: "GET",
          ...params,
        }),
    };
  }
}
