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

export interface AWSElasticBlockStoreVolumeSource {
  fsType?: string;
  /** @format int32 */
  partition?: number;
  readOnly?: boolean;
  volumeID?: string;
}
export interface Affinity {
  nodeAffinity?: NodeAffinity;
  podAffinity?: PodAffinity;
  podAntiAffinity?: PodAntiAffinity;
}
export interface AzureDiskVolumeSource {
  cachingMode?: string;
  diskName?: string;
  diskURI?: string;
  fsType?: string;
  kind?: string;
  readOnly?: boolean;
}
export interface AzureFileVolumeSource {
  readOnly?: boolean;
  secretName?: string;
  shareName?: string;
}
export interface CSIVolumeSource {
  driver?: string;
  fsType?: string;
  nodePublishSecretRef?: LocalObjectReference;
  readOnly?: boolean;
  volumeAttributes?: Record<string, string>;
}
export interface Capabilities {
  add?: string[];
  drop?: string[];
}
export interface CephFSVolumeSource {
  monitors?: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: LocalObjectReference;
  user?: string;
}
export interface CinderVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  volumeID?: string;
}
export interface ConfigInfo {
  definition?: ConfigKeyInfo;
  value?: ConfigValueInfo;
}
export interface ConfigInfos {
  configs?: ConfigInfo[];
  /** @format int32 */
  error_count?: number;
  groups?: string[];
  name?: string;
}
export declare type ConfigKeyInfo = object;
export interface ConfigMapEnvSource {
  name?: string;
  optional?: boolean;
}
export interface ConfigMapKeySelector {
  key?: string;
  name?: string;
  optional?: boolean;
}
export interface ConfigMapProjection {
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface ConfigMapVolumeSource {
  /** @format int32 */
  defaultMode?: number;
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface ConfigValueInfo {
  errors?: string[];
  name?: string;
  recommended_values?: string[];
  value?: string;
  visible?: boolean;
}
export interface ConnectClusterConfig {
  bootstrapServers?: string;
  groupId?: string;
  /** @format int32 */
  replicas?: number;
}
export interface ConnectConnectorStatus {
  state?: "DESTROYED" | "FAILED" | "PAUSED" | "RUNNING" | "UNASSIGNED";
  worker_id?: string;
}
export interface ConnectConnectorStatusResponse {
  connector?: ConnectConnectorStatus;
  name?: string;
  tasks?: ConnectTaskStatus[];
  type?: "sink" | "source";
}
export interface ConnectTaskStatus {
  errorsAsList?: string[];
  /** @format int64 */
  id?: number;
  state?: "DESTROYED" | "FAILED" | "PAUSED" | "RUNNING" | "UNASSIGNED";
  trace?: string;
  worker_id?: string;
}
export interface ConnectTasksResponse {
  config?: Record<string, string>;
  id?: Record<string, string>;
}
export interface ConnectorDetail {
  info?: ConnectorInfo;
  name?: string;
  status?: ConnectorStateInfo;
}
export interface ConnectorInfo {
  config?: object;
  name?: string;
  tasks?: ConnectorTaskId[];
}
export interface ConnectorPlugin {
  class?: string;
  type?: string;
  version?: string;
}
export interface ConnectorState {
  state?: string;
  trace?: string;
  worker_id?: string;
}
export interface ConnectorStateInfo {
  connector?: ConnectorState;
  name?: string;
  tasks?: TaskState[];
  type?: "sink" | "source" | "unknown";
}
export interface ConnectorTaskId {
  connector?: string;
  /** @format int32 */
  task?: number;
}
export interface Container {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  envFrom?: EnvFromSource[];
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: Lifecycle;
  livenessProbe?: Probe;
  name?: string;
  ports?: ContainerPort[];
  readinessProbe?: Probe;
  resources?: ResourceRequirements;
  securityContext?: SecurityContext;
  startupProbe?: Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: VolumeDevice[];
  volumeMounts?: VolumeMount[];
  workingDir?: string;
}
export interface ContainerPort {
  /** @format int32 */
  containerPort?: number;
  hostIP?: string;
  /** @format int32 */
  hostPort?: number;
  name?: string;
  protocol?: string;
}
export interface Deployment {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: DeploymentSpec;
  status?: DeploymentStatus;
}
export interface DeploymentCondition {
  lastTransitionTime?: string;
  lastUpdateTime?: string;
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
}
export interface DeploymentSpec {
  /** @format int32 */
  minReadySeconds?: number;
  paused?: boolean;
  /** @format int32 */
  progressDeadlineSeconds?: number;
  /** @format int32 */
  replicas?: number;
  /** @format int32 */
  revisionHistoryLimit?: number;
  selector?: LabelSelector;
  strategy?: DeploymentStrategy;
  template?: PodTemplateSpec;
}
export interface DeploymentStatus {
  /** @format int32 */
  availableReplicas?: number;
  /** @format int32 */
  collisionCount?: number;
  conditions?: DeploymentCondition[];
  /** @format int64 */
  observedGeneration?: number;
  /** @format int32 */
  readyReplicas?: number;
  /** @format int32 */
  replicas?: number;
  /** @format int32 */
  unavailableReplicas?: number;
  /** @format int32 */
  updatedReplicas?: number;
}
export interface DeploymentStrategy {
  rollingUpdate?: RollingUpdateDeployment;
  type?: string;
}
export interface DownwardAPIProjection {
  items?: DownwardAPIVolumeFile[];
}
export interface DownwardAPIVolumeFile {
  fieldRef?: ObjectFieldSelector;
  /** @format int32 */
  mode?: number;
  path?: string;
  resourceFieldRef?: ResourceFieldSelector;
}
export interface DownwardAPIVolumeSource {
  /** @format int32 */
  defaultMode?: number;
  items?: DownwardAPIVolumeFile[];
}
export interface EmptyDirVolumeSource {
  medium?: string;
  sizeLimit?: Quantity;
}
export interface EnvFromSource {
  configMapRef?: ConfigMapEnvSource;
  prefix?: string;
  secretRef?: SecretEnvSource;
}
export interface EnvVar {
  name?: string;
  value?: string;
  valueFrom?: EnvVarSource;
}
export interface EnvVarSource {
  configMapKeyRef?: ConfigMapKeySelector;
  fieldRef?: ObjectFieldSelector;
  resourceFieldRef?: ResourceFieldSelector;
  secretKeyRef?: SecretKeySelector;
}
export interface EphemeralContainer {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  envFrom?: EnvFromSource[];
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: Lifecycle;
  livenessProbe?: Probe;
  name?: string;
  ports?: ContainerPort[];
  readinessProbe?: Probe;
  resources?: ResourceRequirements;
  securityContext?: SecurityContext;
  startupProbe?: Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  targetContainerName?: string;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: VolumeDevice[];
  volumeMounts?: VolumeMount[];
  workingDir?: string;
}
export interface ExecAction {
  command?: string[];
}
export interface FCVolumeSource {
  fsType?: string;
  /** @format int32 */
  lun?: number;
  readOnly?: boolean;
  targetWWNs?: string[];
  wwids?: string[];
}
export declare type FieldsV1 = object;
export interface FlexVolumeSource {
  driver?: string;
  fsType?: string;
  options?: Record<string, string>;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
}
export interface FlockerVolumeSource {
  datasetName?: string;
  datasetUUID?: string;
}
export interface GCEPersistentDiskVolumeSource {
  fsType?: string;
  /** @format int32 */
  partition?: number;
  pdName?: string;
  readOnly?: boolean;
}
export interface GitRepoVolumeSource {
  directory?: string;
  repository?: string;
  revision?: string;
}
export interface GlusterfsVolumeSource {
  endpoints?: string;
  path?: string;
  readOnly?: boolean;
}
export interface HTTPGetAction {
  host?: string;
  httpHeaders?: HTTPHeader[];
  path?: string;
  port?: IntOrString;
  scheme?: string;
}
export interface HTTPHeader {
  name?: string;
  value?: string;
}
export interface Handler {
  exec?: ExecAction;
  httpGet?: HTTPGetAction;
  tcpSocket?: TCPSocketAction;
}
export interface HostAlias {
  hostnames?: string[];
  ip?: string;
}
export interface HostPathVolumeSource {
  path?: string;
  type?: string;
}
export interface ISCSIVolumeSource {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn?: string;
  iscsiInterface?: string;
  /** @format int32 */
  lun?: number;
  portals?: string[];
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  targetPortal?: string;
}
export interface IntOrString {
  /** @format int32 */
  IntVal?: number;
  /** @format int32 */
  Kind?: number;
  StrVal?: string;
}
export interface KeyToPath {
  key?: string;
  /** @format int32 */
  mode?: number;
  path?: string;
}
export interface LabelSelector {
  matchExpressions?: LabelSelectorRequirement[];
  matchLabels?: Record<string, string>;
}
export interface LabelSelectorRequirement {
  key?: string;
  operator?: string;
  values?: string[];
}
export interface Lifecycle {
  postStart?: Handler;
  preStop?: Handler;
}
export interface LocalObjectReference {
  name?: string;
}
export interface ManagedFieldsEntry {
  apiVersion?: string;
  fieldsType?: string;
  fieldsV1?: FieldsV1;
  manager?: string;
  operation?: string;
  time?: string;
}
export interface ModelAndView {
  empty?: boolean;
  model?: object;
  modelMap?: Record<string, object>;
  reference?: boolean;
  status?:
    | "ACCEPTED"
    | "ALREADY_REPORTED"
    | "BAD_GATEWAY"
    | "BAD_REQUEST"
    | "BANDWIDTH_LIMIT_EXCEEDED"
    | "CHECKPOINT"
    | "CONFLICT"
    | "CONTINUE"
    | "CREATED"
    | "DESTINATION_LOCKED"
    | "EXPECTATION_FAILED"
    | "FAILED_DEPENDENCY"
    | "FORBIDDEN"
    | "FOUND"
    | "GATEWAY_TIMEOUT"
    | "GONE"
    | "HTTP_VERSION_NOT_SUPPORTED"
    | "IM_USED"
    | "INSUFFICIENT_SPACE_ON_RESOURCE"
    | "INSUFFICIENT_STORAGE"
    | "INTERNAL_SERVER_ERROR"
    | "I_AM_A_TEAPOT"
    | "LENGTH_REQUIRED"
    | "LOCKED"
    | "LOOP_DETECTED"
    | "METHOD_FAILURE"
    | "METHOD_NOT_ALLOWED"
    | "MOVED_PERMANENTLY"
    | "MOVED_TEMPORARILY"
    | "MULTIPLE_CHOICES"
    | "MULTI_STATUS"
    | "NETWORK_AUTHENTICATION_REQUIRED"
    | "NON_AUTHORITATIVE_INFORMATION"
    | "NOT_ACCEPTABLE"
    | "NOT_EXTENDED"
    | "NOT_FOUND"
    | "NOT_IMPLEMENTED"
    | "NOT_MODIFIED"
    | "NO_CONTENT"
    | "OK"
    | "PARTIAL_CONTENT"
    | "PAYLOAD_TOO_LARGE"
    | "PAYMENT_REQUIRED"
    | "PERMANENT_REDIRECT"
    | "PRECONDITION_FAILED"
    | "PRECONDITION_REQUIRED"
    | "PROCESSING"
    | "PROXY_AUTHENTICATION_REQUIRED"
    | "REQUESTED_RANGE_NOT_SATISFIABLE"
    | "REQUEST_ENTITY_TOO_LARGE"
    | "REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "REQUEST_TIMEOUT"
    | "REQUEST_URI_TOO_LONG"
    | "RESET_CONTENT"
    | "SEE_OTHER"
    | "SERVICE_UNAVAILABLE"
    | "SWITCHING_PROTOCOLS"
    | "TEMPORARY_REDIRECT"
    | "TOO_EARLY"
    | "TOO_MANY_REQUESTS"
    | "UNAUTHORIZED"
    | "UNAVAILABLE_FOR_LEGAL_REASONS"
    | "UNPROCESSABLE_ENTITY"
    | "UNSUPPORTED_MEDIA_TYPE"
    | "UPGRADE_REQUIRED"
    | "URI_TOO_LONG"
    | "USE_PROXY"
    | "VARIANT_ALSO_NEGOTIATES";
  view?: View;
  viewName?: string;
}
export interface NFSVolumeSource {
  path?: string;
  readOnly?: boolean;
  server?: string;
}
export interface NodeAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
}
export interface NodeSelector {
  nodeSelectorTerms?: NodeSelectorTerm[];
}
export interface NodeSelectorRequirement {
  key?: string;
  operator?: string;
  values?: string[];
}
export interface NodeSelectorTerm {
  matchExpressions?: NodeSelectorRequirement[];
  matchFields?: NodeSelectorRequirement[];
}
export interface ObjectFieldSelector {
  apiVersion?: string;
  fieldPath?: string;
}
export interface ObjectMeta {
  annotations?: Record<string, string>;
  clusterName?: string;
  creationTimestamp?: string;
  /** @format int64 */
  deletionGracePeriodSeconds?: number;
  deletionTimestamp?: string;
  finalizers?: string[];
  generateName?: string;
  /** @format int64 */
  generation?: number;
  labels?: Record<string, string>;
  managedFields?: ManagedFieldsEntry[];
  name?: string;
  namespace?: string;
  ownerReferences?: OwnerReference[];
  resourceVersion?: string;
  selfLink?: string;
  uid?: string;
}
export interface OwnerReference {
  apiVersion?: string;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind?: string;
  name?: string;
  uid?: string;
}
export interface PersistentVolumeClaimVolumeSource {
  claimName?: string;
  readOnly?: boolean;
}
export interface PhotonPersistentDiskVolumeSource {
  fsType?: string;
  pdID?: string;
}
export interface PodAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
export interface PodAffinityTerm {
  labelSelector?: LabelSelector;
  namespaces?: string[];
  topologyKey?: string;
}
export interface PodAntiAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
export interface PodDNSConfig {
  nameservers?: string[];
  options?: PodDNSConfigOption[];
  searches?: string[];
}
export interface PodDNSConfigOption {
  name?: string;
  value?: string;
}
export interface PodReadinessGate {
  conditionType?: string;
}
export interface PodSecurityContext {
  /** @format int64 */
  fsGroup?: number;
  fsGroupChangePolicy?: string;
  /** @format int64 */
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  /** @format int64 */
  runAsUser?: number;
  seLinuxOptions?: SELinuxOptions;
  supplementalGroups?: number[];
  sysctls?: Sysctl[];
  windowsOptions?: WindowsSecurityContextOptions;
}
export interface PodSpec {
  /** @format int64 */
  activeDeadlineSeconds?: number;
  affinity?: Affinity;
  automountServiceAccountToken?: boolean;
  containers?: Container[];
  dnsConfig?: PodDNSConfig;
  dnsPolicy?: string;
  enableServiceLinks?: boolean;
  ephemeralContainers?: EphemeralContainer[];
  hostAliases?: HostAlias[];
  hostIPC?: boolean;
  hostNetwork?: boolean;
  hostPID?: boolean;
  hostname?: string;
  imagePullSecrets?: LocalObjectReference[];
  initContainers?: Container[];
  nodeName?: string;
  nodeSelector?: Record<string, string>;
  overhead?: Record<string, Quantity>;
  preemptionPolicy?: string;
  /** @format int32 */
  priority?: number;
  priorityClassName?: string;
  readinessGates?: PodReadinessGate[];
  restartPolicy?: string;
  runtimeClassName?: string;
  schedulerName?: string;
  securityContext?: PodSecurityContext;
  serviceAccount?: string;
  serviceAccountName?: string;
  shareProcessNamespace?: boolean;
  subdomain?: string;
  /** @format int64 */
  terminationGracePeriodSeconds?: number;
  tolerations?: Toleration[];
  topologySpreadConstraints?: TopologySpreadConstraint[];
  volumes?: Volume[];
}
export interface PodTemplateSpec {
  metadata?: ObjectMeta;
  spec?: PodSpec;
}
export interface PortworxVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  volumeID?: string;
}
export interface PreferredSchedulingTerm {
  preference?: NodeSelectorTerm;
  /** @format int32 */
  weight?: number;
}
export interface Probe {
  exec?: ExecAction;
  /** @format int32 */
  failureThreshold?: number;
  httpGet?: HTTPGetAction;
  /** @format int32 */
  initialDelaySeconds?: number;
  /** @format int32 */
  periodSeconds?: number;
  /** @format int32 */
  successThreshold?: number;
  tcpSocket?: TCPSocketAction;
  /** @format int32 */
  timeoutSeconds?: number;
}
export interface ProjectedVolumeSource {
  /** @format int32 */
  defaultMode?: number;
  sources?: VolumeProjection[];
}
export interface Quantity {
  amount?: string;
  format?: string;
}
export interface QuobyteVolumeSource {
  group?: string;
  readOnly?: boolean;
  registry?: string;
  tenant?: string;
  user?: string;
  volume?: string;
}
export interface RBDVolumeSource {
  fsType?: string;
  image?: string;
  keyring?: string;
  monitors?: string[];
  pool?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  user?: string;
}
export interface ResourceFieldSelector {
  containerName?: string;
  divisor?: Quantity;
  resource?: string;
}
export interface ResourceRequirements {
  limits?: Record<string, Quantity>;
  requests?: Record<string, Quantity>;
}
export interface RollingUpdateDeployment {
  maxSurge?: IntOrString;
  maxUnavailable?: IntOrString;
}
export interface SELinuxOptions {
  level?: string;
  role?: string;
  type?: string;
  user?: string;
}
export interface ScaleIOVolumeSource {
  fsType?: string;
  gateway?: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system?: string;
  volumeName?: string;
}
export interface SecretEnvSource {
  name?: string;
  optional?: boolean;
}
export interface SecretKeySelector {
  key?: string;
  name?: string;
  optional?: boolean;
}
export interface SecretProjection {
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface SecretVolumeSource {
  /** @format int32 */
  defaultMode?: number;
  items?: KeyToPath[];
  optional?: boolean;
  secretName?: string;
}
export interface SecurityContext {
  allowPrivilegeEscalation?: boolean;
  capabilities?: Capabilities;
  privileged?: boolean;
  procMount?: string;
  readOnlyRootFilesystem?: boolean;
  /** @format int64 */
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  /** @format int64 */
  runAsUser?: number;
  seLinuxOptions?: SELinuxOptions;
  windowsOptions?: WindowsSecurityContextOptions;
}
export interface ServiceAccountTokenProjection {
  audience?: string;
  /** @format int64 */
  expirationSeconds?: number;
  path?: string;
}
export interface StorageOSVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
export interface Sysctl {
  name?: string;
  value?: string;
}
export interface TCPSocketAction {
  host?: string;
  port?: IntOrString;
}
export interface TaskState {
  /** @format int32 */
  id?: number;
  state?: string;
  trace?: string;
  worker_id?: string;
}
export interface Toleration {
  effect?: string;
  key?: string;
  operator?: string;
  /** @format int64 */
  tolerationSeconds?: number;
  value?: string;
}
export interface TopologySpreadConstraint {
  labelSelector?: LabelSelector;
  /** @format int32 */
  maxSkew?: number;
  topologyKey?: string;
  whenUnsatisfiable?: string;
}
export interface View {
  contentType?: string;
}
export interface Volume {
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
  azureDisk?: AzureDiskVolumeSource;
  azureFile?: AzureFileVolumeSource;
  cephfs?: CephFSVolumeSource;
  cinder?: CinderVolumeSource;
  configMap?: ConfigMapVolumeSource;
  csi?: CSIVolumeSource;
  downwardAPI?: DownwardAPIVolumeSource;
  emptyDir?: EmptyDirVolumeSource;
  fc?: FCVolumeSource;
  flexVolume?: FlexVolumeSource;
  flocker?: FlockerVolumeSource;
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  gitRepo?: GitRepoVolumeSource;
  glusterfs?: GlusterfsVolumeSource;
  hostPath?: HostPathVolumeSource;
  iscsi?: ISCSIVolumeSource;
  name?: string;
  nfs?: NFSVolumeSource;
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  portworxVolume?: PortworxVolumeSource;
  projected?: ProjectedVolumeSource;
  quobyte?: QuobyteVolumeSource;
  rbd?: RBDVolumeSource;
  scaleIO?: ScaleIOVolumeSource;
  secret?: SecretVolumeSource;
  storageos?: StorageOSVolumeSource;
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
export interface VolumeDevice {
  devicePath?: string;
  name?: string;
}
export interface VolumeMount {
  mountPath?: string;
  mountPropagation?: string;
  name?: string;
  readOnly?: boolean;
  subPath?: string;
  subPathExpr?: string;
}
export interface VolumeProjection {
  configMap?: ConfigMapProjection;
  downwardAPI?: DownwardAPIProjection;
  secret?: SecretProjection;
  serviceAccountToken?: ServiceAccountTokenProjection;
}
export interface VsphereVirtualDiskVolumeSource {
  fsType?: string;
  storagePolicyID?: string;
  storagePolicyName?: string;
  volumePath?: string;
}
export interface WeightedPodAffinityTerm {
  podAffinityTerm?: PodAffinityTerm;
  /** @format int32 */
  weight?: number;
}
export interface WindowsSecurityContextOptions {
  gmsaCredentialSpec?: string;
  gmsaCredentialSpecName?: string;
  runAsUserName?: string;
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
 * @title Api Documentation
 * @version 1.0
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 * @termsOfService urn:tos
 * @baseUrl http://10.1.8.13:32110
 * @contact
 *
 * Api Documentation
 */
export declare class Api<SecurityDataType extends unknown> {
  private http;
  constructor(http: HttpClient<SecurityDataType>);
  error: {
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
    errorHtmlUsingGet: (params?: RequestParams) => Promise<AxiosResponse<ModelAndView>>;
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
    errorHtmlUsingPut: (params?: RequestParams) => Promise<AxiosResponse<ModelAndView>>;
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
    errorHtmlUsingPost: (params?: RequestParams) => Promise<AxiosResponse<ModelAndView>>;
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
    errorHtmlUsingDelete: (params?: RequestParams) => Promise<AxiosResponse<ModelAndView>>;
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
    errorHtmlUsingOptions: (params?: RequestParams) => Promise<AxiosResponse<ModelAndView>>;
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
    errorHtmlUsingHead: (params?: RequestParams) => Promise<AxiosResponse<ModelAndView>>;
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
    errorHtmlUsingPatch: (params?: RequestParams) => Promise<AxiosResponse<ModelAndView>>;
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
    errorHtmlUsingTrace: (params?: RequestParams) => Promise<AxiosResponse<ModelAndView>>;
  };
  dataPipeline: {
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
    addClustersUsingPost: (data: ConnectClusterConfig, params?: RequestParams) => Promise<AxiosResponse<ConfigKeyInfo>>;
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
    getClustersUsingGet: (params?: RequestParams) => Promise<AxiosResponse<Deployment[]>>;
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
    deleteClustersUsingDelete: (groupId: string, params?: RequestParams) => Promise<AxiosResponse<ConfigKeyInfo>>;
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
    listConnectorsExpandUsingGet: (
      cluster: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConnectorDetail[]>>;
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
    listConnectorsUsingGet: (cluster: string, params?: RequestParams) => Promise<AxiosResponse<string[]>>;
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
    getConnectorPluginsUsingGet: (cluster: string, params?: RequestParams) => Promise<AxiosResponse<ConnectorPlugin[]>>;
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
    validateConfigsUsingPut: (
      cluster: string,
      connectorType: string,
      query?: {
        connectorConfig?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConfigInfos>>;
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
    getConnectorInfoUsingGet: (
      cluster: string,
      connectorname: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConnectorInfo>>;
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
    getConnectorConfigUsingGet: (
      cluster: string,
      connectorname: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<Record<string, string>>>;
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
    putConnectorConfigUsingPut: (
      cluster: string,
      connectorname: string,
      query: {
        forward: boolean;
      },
      data: Record<string, string>,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConfigKeyInfo>>;
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
    getSingleConnectorStatusUsingGet: (
      cluster: string,
      connectorname: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConnectConnectorStatusResponse>>;
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
    getConnectorTasksStatusUsingGet: (
      cluster: string,
      connectorname: string,
      tasknumber: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConnectTaskStatus>>;
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
    getConnectorTasksUsingGet: (
      cluster: string,
      connectorname: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConnectTasksResponse>>;
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
    createConnectorUsingPost: (
      cluster: string,
      connectorTypeId: string,
      data: ConnectorInfo,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConfigKeyInfo>>;
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
    deleteConnectorUsingDelete: (
      cluster: string,
      connectorname: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConfigKeyInfo>>;
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
    pauseConnectorUsingPut: (
      cluster: string,
      connectorname: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConfigKeyInfo>>;
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
    restartConnectorUsingPost: (
      cluster: string,
      connectorname: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConfigKeyInfo>>;
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
    resumeConnectorUsingPut: (
      cluster: string,
      connectorname: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConfigKeyInfo>>;
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
    restartTaskUsingPost: (
      cluster: string,
      connectorname: string,
      tasknumber: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<ConfigKeyInfo>>;
  };
}
