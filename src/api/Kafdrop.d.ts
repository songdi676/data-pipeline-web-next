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

export interface AclVO {
  host?: string;
  name?: string;
  operation?: string;
  patternType?: string;
  permissionType?: string;
  principal?: string;
  resourceType?: string;
}
export interface BrokerVO {
  controller?: boolean;
  host?: string;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  port?: number;
  rack?: string;
}
export declare type ClusterInfoVO = object;
export interface ConsumerPartitionVO {
  /** @format int64 */
  firstOffset?: number;
  /** @format int64 */
  lag?: number;
  /** @format int64 */
  offset?: number;
  /** @format int32 */
  partitionId?: number;
  /** @format int64 */
  size?: number;
  topic?: string;
}
export interface ConsumerTopicVO {
  /** @format int64 */
  lag?: number;
  partitions?: ConsumerPartitionVO[];
  topic?: string;
}
export interface ConsumerVO {
  groupId?: string;
  topics?: ConsumerTopicVO[];
}
export interface PartitionReplica {
  /** @format int32 */
  id?: number;
}
export interface TopicPartitionVO {
  /** @format int64 */
  firstOffset?: number;
  /** @format int32 */
  id?: number;
  inSyncReplicas?: PartitionReplica[];
  leader?: PartitionReplica;
  leaderPreferred?: boolean;
  offlineReplicas?: PartitionReplica[];
  preferredLeader?: PartitionReplica;
  replicas?: PartitionReplica[];
  /** @format int64 */
  size?: number;
  underReplicated?: boolean;
}
export interface TopicVO {
  /** @format int64 */
  availableSize?: number;
  config?: Record<string, string>;
  name?: string;
  partitionMap?: Record<string, TopicPartitionVO>;
  partitions?: TopicPartitionVO[];
  /** @format double */
  preferredReplicaPercent?: number;
  /** @format int64 */
  totalSize?: number;
  underReplicatedPartitions?: TopicPartitionVO[];
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
 * @title Kafdrop API
 * @baseUrl //10.1.8.33:32319
 *
 * JSON APIs for Kafdrop
 */
export declare class Api<SecurityDataType extends unknown> {
  private http;
  constructor(http: HttpClient<SecurityDataType>);
  /**
   * @description Get high level broker, topic, and partition data for the Kafka cluster
   *
   * @tags cluster-controller
   * @name GetClusterUsingGet
   * @summary getCluster
   * @request GET:/
   * @response `200` `ClusterInfoVO` Success
   */
  getClusterUsingGet: (params?: RequestParams) => Promise<AxiosResponse<ClusterInfoVO>>;
  acl: {
    /**
     * @description Get list of all acls
     *
     * @tags acl-controller
     * @name GetAllTopicsUsingGet
     * @summary getAllAcls
     * @request GET:/acl
     * @response `200` `(string)[]` Success
     */
    getAllTopicsUsingGet: (params?: RequestParams) => Promise<AxiosResponse<string[]>>;
  };
  broker: {
    /**
     * @description Get details for all known Kafka brokers
     *
     * @tags broker-controller
     * @name BrokerDetailsJsonUsingGet1
     * @summary getAllBrokers
     * @request GET:/broker
     * @response `200` `BrokerVO` Success
     */
    brokerDetailsJsonUsingGet1: (params?: RequestParams) => Promise<AxiosResponse<BrokerVO>>;
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
    brokerDetailsJsonUsingGet: (id: number, params?: RequestParams) => Promise<AxiosResponse<BrokerVO>>;
  };
  consumer: {
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
    getConsumerUsingGet: (groupId: string, params?: RequestParams) => Promise<AxiosResponse<ConsumerVO>>;
  };
  topic: {
    /**
     * @description Get list of all topics
     *
     * @tags topic-controller
     * @name GetAllTopicsUsingGet1
     * @summary getAllTopics
     * @request GET:/topic
     * @response `200` `(string)[]` Success
     */
    getAllTopicsUsingGet1: (params?: RequestParams) => Promise<AxiosResponse<string[]>>;
    /**
     * @description Create topic
     *
     * @tags topic-controller
     * @name CreateTopicUsingPost
     * @summary createTopic
     * @request POST:/topic
     * @response `200` `string` Success
     */
    createTopicUsingPost: (
      query?: {
        name?: string;
        partitionsNumber?: number;
        replicationFactor?: number;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<string>>;
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
    getTopicUsingGet: (name: string, params?: RequestParams) => Promise<AxiosResponse<TopicVO>>;
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
    getConsumersUsingGet: (name: string, params?: RequestParams) => Promise<AxiosResponse<string[]>>;
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
    getPartitionOrMessagesUsingGet: (
      name: string,
      query?: {
        count?: number;
        descFile?: string;
        format?: string;
        keyFormat?: string;
        msgTypeName?: string;
        offset?: number;
        partition?: number;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<object[]>>;
  };
}
