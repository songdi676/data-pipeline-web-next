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

export declare type AbstractConfigData = Resource & {
  cluster_id: string;
  name: string;
  value?: string | null;
  is_default: boolean;
  is_read_only: boolean;
  is_sensitive: boolean;
  source: ConfigSource;
  synonyms: ConfigSynonymData[];
};
export declare type AclData = Resource & {
  cluster_id: string;
  resource_type: AclResourceType;
  resource_name: string;
  pattern_type: AclPatternType;
  principal: string;
  host: string;
  operation: AclOperation;
  permission: AclPermission;
};
export declare type AclDataList = ResourceCollection & {
  data: AclData[];
};
export declare enum AclOperation {
  UNKNOWN = "UNKNOWN",
  ANY = "ANY",
  ALL = "ALL",
  READ = "READ",
  WRITE = "WRITE",
  CREATE = "CREATE",
  DELETE = "DELETE",
  ALTER = "ALTER",
  DESCRIBE = "DESCRIBE",
  CLUSTER_ACTION = "CLUSTER_ACTION",
  DESCRIBE_CONFIGS = "DESCRIBE_CONFIGS",
  ALTER_CONFIGS = "ALTER_CONFIGS",
  IDEMPOTENT_WRITE = "IDEMPOTENT_WRITE",
}
export declare enum AclPatternType {
  UNKNOWN = "UNKNOWN",
  ANY = "ANY",
  MATCH = "MATCH",
  LITERAL = "LITERAL",
  PREFIXED = "PREFIXED",
}
export declare enum AclPermission {
  UNKNOWN = "UNKNOWN",
  ANY = "ANY",
  DENY = "DENY",
  ALLOW = "ALLOW",
}
export declare enum AclResourceType {
  UNKNOWN = "UNKNOWN",
  ANY = "ANY",
  TOPIC = "TOPIC",
  GROUP = "GROUP",
  CLUSTER = "CLUSTER",
  TRANSACTIONAL_ID = "TRANSACTIONAL_ID",
  DELEGATION_TOKEN = "DELEGATION_TOKEN",
}
export interface AlterConfigBatchRequestData {
  data: {
    name: string;
    value?: string | null;
    operation?: "SET" | "DELETE" | null;
  }[];
}
export declare type BrokerConfigData = AbstractConfigData & {
  broker_id: number;
};
export declare type BrokerConfigDataList = ResourceCollection & {
  data: BrokerConfigData[];
};
export declare type BrokerData = Resource & {
  cluster_id: string;
  broker_id: number;
  host?: string | null;
  port?: number | null;
  rack?: string | null;
  configs: Relationship;
  partition_replicas: Relationship;
};
export declare type BrokerDataList = ResourceCollection & {
  data: BrokerData[];
};
export declare type ClusterConfigData = AbstractConfigData & {
  config_type: ClusterConfigType;
};
export declare type ClusterConfigDataList = ResourceCollection & {
  data: ClusterConfigData[];
};
export declare enum ClusterConfigType {
  BROKER = "BROKER",
}
export declare type ClusterData = Resource & {
  cluster_id: string;
  controller?: Relationship;
  acls: Relationship;
  brokers: Relationship;
  broker_configs: Relationship;
  consumer_groups: Relationship;
  topics: Relationship;
  partition_reassignments: Relationship;
};
export declare type ClusterDataList = ResourceCollection & {
  data: ClusterData[];
};
export interface CreateAclRequestData {
  resource_type: AclResourceType;
  resource_name: string;
  pattern_type: AclPatternType;
  principal: string;
  host: string;
  operation: AclOperation;
  permission: AclPermission;
}
export interface CreateTopicRequestData {
  topic_name: string;
  partitions_count?: number;
  replication_factor?: number;
  replicas_assignments?: {
    partition_id: number;
    broker_ids: number[];
  }[];
  configs?: {
    name: string;
    value?: string | null;
  }[];
}
export declare enum ConfigSource {
  DYNAMIC_CLUSTER_LINK_CONFIG = "DYNAMIC_CLUSTER_LINK_CONFIG",
  DYNAMIC_TOPIC_CONFIG = "DYNAMIC_TOPIC_CONFIG",
  DYNAMIC_BROKER_LOGGER_CONFIG = "DYNAMIC_BROKER_LOGGER_CONFIG",
  DYNAMIC_BROKER_CONFIG = "DYNAMIC_BROKER_CONFIG",
  DYNAMIC_DEFAULT_BROKER_CONFIG = "DYNAMIC_DEFAULT_BROKER_CONFIG",
  STATIC_BROKER_CONFIG = "STATIC_BROKER_CONFIG",
  DEFAULT_CONFIG = "DEFAULT_CONFIG",
  UNKNOWN = "UNKNOWN",
}
export interface ConfigSynonymData {
  name: string;
  value?: string | null;
  source: ConfigSource;
}
export declare type ConsumerAssignmentData = Resource & {
  cluster_id: string;
  consumer_group_id: string;
  consumer_id: string;
  topic_name: string;
  partition_id: number;
  partition: Relationship;
  lag: Relationship;
};
export declare type ConsumerAssignmentDataList = ResourceCollection & {
  data: ConsumerAssignmentData[];
};
export declare type ConsumerData = Resource & {
  cluster_id: string;
  consumer_group_id: string;
  consumer_id: string;
  instance_id?: string | null;
  client_id: string;
  assignments: Relationship;
};
export declare type ConsumerDataList = ResourceCollection & {
  data: ConsumerData[];
};
export declare type ConsumerGroupData = Resource & {
  cluster_id: string;
  consumer_group_id: string;
  is_simple: boolean;
  partition_assignor: string;
  state: ConsumerGroupState;
  coordinator: Relationship;
  consumer?: Relationship;
  lag_summary: Relationship;
};
export declare type ConsumerGroupDataList = ResourceCollection & {
  data: ConsumerGroupData[];
};
export declare enum ConsumerGroupState {
  UNKNOWN = "UNKNOWN",
  PREPARING_REBALANCE = "PREPARING_REBALANCE",
  COMPLETING_REBALANCE = "COMPLETING_REBALANCE",
  STABLE = "STABLE",
  DEAD = "DEAD",
  EMPTY = "EMPTY",
}
export declare type ConsumerLagData = Resource & {
  cluster_id: string;
  consumer_group_id: string;
  topic_name: string;
  partition_id: number;
  current_offset: number;
  log_end_offset: number;
  lag: number;
  consumer_id: string;
  instance_id?: string | null;
  client_id: string;
};
export declare type ConsumerLagDataList = ResourceCollection & {
  data: ConsumerLagData[];
};
export declare type ConsumerGroupLagSummaryData = Resource & {
  cluster_id: string;
  consumer_group_id: string;
  max_lag_consumer_id: string;
  max_lag_instance_id?: string | null;
  max_lag_client_id: string;
  max_lag_topic_name: string;
  max_lag_partition_id: number;
  max_lag: number;
  total_lag: number;
  max_lag_consumer: Relationship;
  max_lag_partition: Relationship;
};
export declare type PartitionData = Resource & {
  cluster_id: string;
  topic_name: string;
  partition_id: number;
  leader?: Relationship;
  replicas: Relationship;
  reassignment: Relationship;
};
export declare type PartitionDataList = ResourceCollection & {
  data: PartitionData[];
};
export declare type ReassignmentData = Resource & {
  cluster_id: string;
  topic_name: string;
  partition_id: number;
  adding_replicas: number[];
  removing_replicas: number[];
  replicas: Relationship;
};
export declare type ReassignmentDataList = ResourceCollection & {
  data: ReassignmentData[];
};
export interface Relationship {
  related: string;
}
export declare type ReplicaData = Resource & {
  cluster_id: string;
  topic_name: string;
  partition_id: number;
  broker_id: number;
  is_leader: boolean;
  is_in_sync: boolean;
  broker: Relationship;
};
export declare type ReplicaDataList = ResourceCollection & {
  data: ReplicaData[];
};
export interface Resource {
  kind: string;
  metadata: ResourceMetadata;
}
export interface ResourceCollection {
  kind: string;
  metadata: ResourceCollectionMetadata;
}
export interface ResourceCollectionMetadata {
  self: string;
  next?: string | null;
}
export interface ResourceMetadata {
  self: string;
  resource_name?: string | null;
}
export declare type TopicConfigData = AbstractConfigData & {
  topic_name: string;
};
export declare type TopicConfigDataList = ResourceCollection & {
  data: TopicConfigData[];
};
export declare type TopicData = Resource & {
  cluster_id: string;
  topic_name: string;
  is_internal: boolean;
  replication_factor: number;
  partitions_count: number;
  partitions: Relationship;
  configs: Relationship;
  partition_reassignments: Relationship;
};
export declare type TopicDataList = ResourceCollection & {
  data: TopicData[];
};
export interface UpdateConfigRequestData {
  value?: string | null;
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export declare type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}
export declare enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}
export declare class HttpClient<SecurityDataType = unknown> {
  instance: AxiosInstance;
  private securityData;
  private securityWorker?;
  private secure?;
  private format?;
  constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType | null) => void;
  private mergeRequestParams;
  request: <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams) => Promise<any>;
}
/**
 * @title Kafka HTTP API
 * @version 3.0.0
 * @baseUrl {protocol}://{address}:{port}/v3
 */
export declare class Api<SecurityDataType extends unknown> {
  private http;
  constructor(http: HttpClient<SecurityDataType>);
  clusters: {
    /**
     * @description Returns a list of known Kafka clusters. Currently both Kafka and Kafka REST Proxy are only aware of the Kafka cluster pointed at by the ``bootstrap.servers`` configuration. Therefore only one Kafka cluster will be returned in the response.
     *
     * @tags Cluster
     * @name ClustersList
     * @summary List Clusters
     * @request GET:/clusters
     * @response `200` `ClusterDataList`
     */
    clustersList: (params?: RequestParams) => Promise<AxiosResponse<ClusterDataList>>;
    /**
     * @description Returns the Kafka cluster with the specified ``cluster_id``.
     *
     * @tags Cluster
     * @name ClustersDetail
     * @summary Get Cluster
     * @request GET:/clusters/{cluster_id}
     * @response `200` `ClusterData`
     */
    clustersDetail: (clusterId: string, params?: RequestParams) => Promise<AxiosResponse<ClusterData>>;
    /**
     * @description Returns a list of ACLs that match the search criteria.
     *
     * @tags ACL
     * @name AclsDetail
     * @summary Search ACLs
     * @request GET:/clusters/{cluster_id}/acls
     * @response `200` `AclDataList`
     */
    aclsDetail: (
      clusterId: string,
      query?: {
        resource_type?: AclResourceType;
        resource_name?: string;
        pattern_type?: AclPatternType;
        principal?: string;
        host?: string;
        operation?: AclOperation;
        permission?: AclPermission;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<AclDataList>>;
    /**
     * @description Creates an ACL.
     *
     * @tags ACL
     * @name AclsCreate
     * @summary Create ACLs
     * @request POST:/clusters/{cluster_id}/acls
     * @response `201` `void` No Content
     */
    aclsCreate: (clusterId: string, data: CreateAclRequestData, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * @description Deletes the list of ACLs that matches the search criteria.
     *
     * @tags ACL
     * @name AclsDelete
     * @summary Delete ACLs
     * @request DELETE:/clusters/{cluster_id}/acls
     * @response `200` `{ data: (AclData)[] }`
     */
    aclsDelete: (
      clusterId: string,
      query?: {
        resource_type?: AclResourceType;
        resource_name?: string;
        pattern_type?: AclPatternType;
        principal?: string;
        host?: string;
        operation?: AclOperation;
        permission?: AclPermission;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<{
        data: AclData[];
      }>
    >;
    /**
     * @description Returns a list of configuration parameters for the specified Kafka cluster.
     *
     * @tags Configs
     * @name BrokerConfigsDetail
     * @summary List Cluster Configs
     * @request GET:/clusters/{cluster_id}/broker-configs
     * @response `200` `ClusterConfigDataList`
     */
    brokerConfigsDetail: (clusterId: string, params?: RequestParams) => Promise<AxiosResponse<ClusterConfigDataList>>;
    /**
     * @description Updates or deletes a set of Kafka cluster configuration parameters.
     *
     * @tags Configs
     * @name BrokerConfigsAlterCreate
     * @summary Batch Alter Cluster Configs
     * @request POST:/clusters/{cluster_id}/broker-configs:alter
     * @response `204` `void` No Content
     */
    brokerConfigsAlterCreate: (
      clusterId: string,
      alter: string,
      data: AlterConfigBatchRequestData,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
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
    brokerConfigsDetail2: (
      clusterId: string,
      name: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ClusterConfigData>>;
    /**
     * @description Updates the configuration parameter specified by ``name``.
     *
     * @tags Configs
     * @name BrokerConfigsUpdate
     * @summary Update Cluster Config
     * @request PUT:/clusters/{cluster_id}/broker-configs/{name}
     * @response `204` `void` No Content
     */
    brokerConfigsUpdate: (
      clusterId: string,
      name: string,
      data: UpdateConfigRequestData,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description Resets the configuration parameter specified by ``name`` to its default value.
     *
     * @tags Configs
     * @name BrokerConfigsDelete
     * @summary Reset Cluster Config
     * @request DELETE:/clusters/{cluster_id}/broker-configs/{name}
     * @response `204` `void` No Content
     */
    brokerConfigsDelete: (clusterId: string, name: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * @description Return a list of brokers that belong to the specified Kafka cluster.
     *
     * @tags Broker
     * @name BrokersDetail
     * @summary List Brokers
     * @request GET:/clusters/{cluster_id}/brokers
     * @response `200` `BrokerDataList`
     */
    brokersDetail: (clusterId: string, params?: RequestParams) => Promise<AxiosResponse<BrokerDataList>>;
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
    brokersDetail2: (clusterId: string, brokerId: number, params?: RequestParams) => Promise<AxiosResponse<BrokerData>>;
    /**
     * @description Return the list of configuration parameters for all the brokers in the given Kafka cluster.
     *
     * @tags Configs
     * @name BrokersConfigsDetail
     * @summary List All Broker Configs
     * @request GET:/clusters/{cluster_id}/brokers/-/configs
     * @response `200` `BrokerConfigDataList`
     */
    brokersConfigsDetail: (clusterId: string, params?: RequestParams) => Promise<AxiosResponse<BrokerConfigDataList>>;
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
    brokersConfigsDetail2: (
      clusterId: string,
      brokerId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<BrokerConfigDataList>>;
    /**
     * @description Updates or deletes a set of broker configuration parameters.
     *
     * @tags Configs
     * @name BrokersConfigsAlterCreate
     * @summary Batch Alter Broker Configs
     * @request POST:/clusters/{cluster_id}/brokers/{broker_id}/configs:alter
     * @response `204` `void` No Content
     */
    brokersConfigsAlterCreate: (
      clusterId: string,
      brokerId: number,
      alter: string,
      data: AlterConfigBatchRequestData,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
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
    brokersConfigsDetail3: (
      clusterId: string,
      brokerId: number,
      name: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<BrokerConfigData>>;
    /**
     * @description Updates the configuration parameter specified by ``name``.
     *
     * @tags Configs
     * @name BrokersConfigsUpdate
     * @summary Update Broker Config
     * @request PUT:/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}
     * @response `204` `void` No Content
     */
    brokersConfigsUpdate: (
      clusterId: string,
      brokerId: number,
      name: string,
      data: UpdateConfigRequestData,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description Resets the configuration parameter specified by ``name`` to its default value.
     *
     * @tags Configs
     * @name BrokersConfigsDelete
     * @summary Reset Broker Config
     * @request DELETE:/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}
     * @response `204` `void` No Content
     */
    brokersConfigsDelete: (
      clusterId: string,
      brokerId: number,
      name: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description Returns the list of replicas assigned to the specified broker.
     *
     * @tags Broker, Replica
     * @name BrokersPartitionReplicasDetail
     * @summary Search Replicas by Broker
     * @request GET:/clusters/{cluster_id}/brokers/{broker_id}/partition-replicas
     * @response `200` `ReplicaDataList`
     */
    brokersPartitionReplicasDetail: (
      clusterId: string,
      brokerId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ReplicaDataList>>;
    /**
     * @description Returns the list of consumer groups that belong to the specified Kafka cluster.
     *
     * @tags Consumer Group
     * @name ConsumerGroupsDetail
     * @summary List Consumer Groups
     * @request GET:/clusters/{cluster_id}/consumer-groups
     * @response `200` `ConsumerGroupDataList`
     */
    consumerGroupsDetail: (clusterId: string, params?: RequestParams) => Promise<AxiosResponse<ConsumerGroupDataList>>;
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
    consumerGroupsDetail2: (
      clusterId: string,
      consumerGroupId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConsumerGroupData>>;
    /**
     * @description Returns a list of consumers that belong to the specified consumer group.
     *
     * @tags Consumer Group
     * @name ConsumerGroupsConsumersDetail
     * @summary List Consumers
     * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers
     * @response `200` `ConsumerDataList`
     */
    consumerGroupsConsumersDetail: (
      clusterId: string,
      consumerGroupId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConsumerDataList>>;
    /**
     * @description Returns the max and total lag of the consumers belonging to the specified consumer group.
     *
     * @tags Consumer Group
     * @name ConsumerGroupsLagSummaryDetail
     * @summary Get Consumer Group Lag Summary.
     * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lag-summary
     * @response `200` `ConsumerGroupLagSummaryData`
     */
    consumerGroupsLagSummaryDetail: (
      clusterId: string,
      consumerGroupId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConsumerGroupLagSummaryData>>;
    /**
     * @description Returns a list of consumer lags of the consumers belonging to the specified consumer group.
     *
     * @tags Consumer Group
     * @name ConsumerGroupsLagsDetail
     * @summary List Consumer Lags
     * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags
     * @response `200` `ConsumerLagDataList`
     */
    consumerGroupsLagsDetail: (
      clusterId: string,
      consumerGroupId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConsumerLagDataList>>;
    /**
     * @description Returns the consumer lag on a partition with the given `partition_id`.
     *
     * @tags Partition
     * @name ConsumerGroupsLagsPartitionsDetail
     * @summary Get Consumer Lag
     * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags/{topic_name}/partitions/{partition_id}
     * @response `200` `ConsumerLagData`
     */
    consumerGroupsLagsPartitionsDetail: (
      clusterId: string,
      consumerGroupId: string,
      topicName: string,
      partitionId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConsumerLagData>>;
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
    consumerGroupsConsumersDetail2: (
      clusterId: string,
      consumerGroupId: string,
      consumerId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConsumerData>>;
    /**
     * @description Returns a list of partition assignments for the specified consumer.
     *
     * @tags Consumer Group
     * @name ConsumerGroupsConsumersAssignmentsDetail
     * @summary List Consumer Assignments
     * @request GET:/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments
     * @response `200` `ConsumerAssignmentDataList`
     */
    consumerGroupsConsumersAssignmentsDetail: (
      clusterId: string,
      consumerGroupId: string,
      consumerId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConsumerAssignmentDataList>>;
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
      clusterId: string,
      consumerGroupId: string,
      consumerId: string,
      topicName: string,
      partitionId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConsumerAssignmentData>>;
    /**
     * @description Returns the list of topics that belong to the specified Kafka cluster.
     *
     * @tags Topic
     * @name TopicsDetail
     * @summary List Topics
     * @request GET:/clusters/{cluster_id}/topics
     * @response `200` `TopicDataList`
     */
    topicsDetail: (clusterId: string, params?: RequestParams) => Promise<AxiosResponse<TopicDataList>>;
    /**
     * @description Creates a topic.
     *
     * @tags Topic
     * @name TopicsCreate
     * @summary Create Topic
     * @request POST:/clusters/{cluster_id}/topics
     * @response `201` `TopicData`
     */
    topicsCreate: (
      clusterId: string,
      data: CreateTopicRequestData,
      params?: RequestParams,
    ) => Promise<AxiosResponse<TopicData>>;
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
    topicsDetail2: (clusterId: string, topicName: string, params?: RequestParams) => Promise<AxiosResponse<TopicData>>;
    /**
     * @description Deletes the topic with the given `topic_name`.
     *
     * @tags Topic
     * @name TopicsDelete
     * @summary Delete Topic
     * @request DELETE:/clusters/{cluster_id}/topics/{topic_name}
     * @response `204` `void` No Content
     */
    topicsDelete: (clusterId: string, topicName: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * @description Return the list of configs that belong to the specified topic.
     *
     * @tags Configs
     * @name TopicsConfigsDetail
     * @summary List Topic Configs
     * @request GET:/clusters/{cluster_id}/topics/{topic_name}/configs
     * @response `200` `TopicConfigDataList`
     */
    topicsConfigsDetail: (
      clusterId: string,
      topicName: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<TopicConfigDataList>>;
    /**
     * @description Updates or deletes a set of topic configs.
     *
     * @tags Configs
     * @name TopicsConfigsAlterCreate
     * @summary Batch Alter Topic Configs
     * @request POST:/clusters/{cluster_id}/topics/{topic_name}/configs:alter
     * @response `204` `void` No Content
     */
    topicsConfigsAlterCreate: (
      clusterId: string,
      topicName: string,
      alter: string,
      data: AlterConfigBatchRequestData,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
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
    topicsConfigsDetail2: (
      clusterId: string,
      topicName: string,
      name: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<TopicConfigData>>;
    /**
     * @description Updates the config with given `name`.
     *
     * @tags Configs
     * @name TopicsConfigsUpdate
     * @summary Update Topic Config
     * @request PUT:/clusters/{cluster_id}/topics/{topic_name}/configs/{name}
     * @response `204` `void` No Content
     */
    topicsConfigsUpdate: (
      clusterId: string,
      topicName: string,
      name: string,
      data: UpdateConfigRequestData,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description Resets the config with given `name` to its default value.
     *
     * @tags Configs
     * @name TopicsConfigsDelete
     * @summary Reset Topic Config
     * @request DELETE:/clusters/{cluster_id}/topics/{topic_name}/configs/{name}
     * @response `204` `void` No Content
     */
    topicsConfigsDelete: (
      clusterId: string,
      topicName: string,
      name: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description Returns the list of partitions that belong to the specified topic.
     *
     * @tags Partition
     * @name TopicsPartitionsDetail
     * @summary List Partitions
     * @request GET:/clusters/{cluster_id}/topics/{topic_name}/partitions
     * @response `200` `PartitionDataList`
     */
    topicsPartitionsDetail: (
      clusterId: string,
      topicName: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PartitionDataList>>;
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
    topicsPartitionsDetail2: (
      clusterId: string,
      topicName: string,
      partitionId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PartitionData>>;
    /**
     * @description Returns the list of all ongoing replica reassignments in the given Kafka cluster.
     *
     * @tags Partition
     * @name TopicsPartitionsReassignmentDetail
     * @summary List All Replica Reassignments
     * @request GET:/clusters/{cluster_id}/topics/-/partitions/-/reassignment
     * @response `200` `ReassignmentDataList`
     */
    topicsPartitionsReassignmentDetail: (
      clusterId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ReassignmentDataList>>;
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
    topicsPartitionsReassignmentDetail2: (
      clusterId: string,
      topicName: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ReassignmentDataList>>;
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
    topicsPartitionsReassignmentDetail3: (
      clusterId: string,
      topicName: string,
      partitionId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ReassignmentData>>;
    /**
     * @description Returns the list of replicas for the specified partition.
     *
     * @tags Replica
     * @name TopicsPartitionsReplicasDetail
     * @summary List Replicas
     * @request GET:/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas
     * @response `200` `ReplicaDataList`
     */
    topicsPartitionsReplicasDetail: (
      clusterId: string,
      topicName: string,
      partitionId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ReplicaDataList>>;
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
    topicsPartitionsReplicasDetail2: (
      clusterId: string,
      topicName: string,
      partitionId: number,
      brokerId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ReplicaData>>;
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
    topicsConfigsDetail3: (clusterId: string, params?: RequestParams) => Promise<AxiosResponse<TopicConfigDataList>>;
  };
}
