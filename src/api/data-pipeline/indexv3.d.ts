/** Generate by swagger-axios-codegen */
/** Generate by swagger-axios-codegen */
import { AxiosInstance } from 'axios';
export interface IRequestOptions {
    headers?: any;
    baseURL?: string;
    responseType?: string;
}
export interface IRequestConfig {
    method?: any;
    headers?: any;
    url?: any;
    data?: any;
    params?: any;
}
export interface ServiceOptions {
    axios?: AxiosInstance;
}
export declare const serviceOptions: ServiceOptions;
export declare function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any>;
export declare function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig;
export interface IList<T> extends Array<T> {
}
export interface List<T> extends Array<T> {
}
export interface IDictionary<TValue> {
    [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {
}
export interface IListResult<T> {
    items?: T[];
}
export declare class ListResultDto<T> implements IListResult<T> {
    items?: T[];
}
export interface IPagedResult<T> extends IListResult<T> {
    totalCount?: number;
    items?: T[];
}
export declare class PagedResultDto<T> implements IPagedResult<T> {
    totalCount?: number;
    items?: T[];
}
export declare class BasicErrorControllerService {
    /**
     * errorHtml
     */
    static error(options?: IRequestOptions): Promise<any>;
    /**
     * errorHtml
     */
    static error1(options?: IRequestOptions): Promise<any>;
    /**
     * errorHtml
     */
    static error2(options?: IRequestOptions): Promise<any>;
    /**
     * errorHtml
     */
    static error3(options?: IRequestOptions): Promise<any>;
    /**
     * errorHtml
     */
    static error4(options?: IRequestOptions): Promise<any>;
    /**
     * errorHtml
     */
    static error5(options?: IRequestOptions): Promise<any>;
    /**
     * errorHtml
     */
    static error6(options?: IRequestOptions): Promise<any>;
    /**
     * errorHtml
     */
    static error7(options?: IRequestOptions): Promise<any>;
}
export declare class ConnectClustersControllerService {
    /**
     * addClusters
     */
    static connectClusters(params?: {
        /** requestBody */
        body?: ConnectClusterConfig;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * getClusters
     */
    static list(options?: IRequestOptions): Promise<any>;
    /**
     * deleteClusters
     */
    static connectClusters1(params?: {
        /** groupId */
        groupId: string;
    }, options?: IRequestOptions): Promise<any>;
}
export declare class ConnectorsControllerService {
    /**
     * listConnectorsExpand
     */
    static expand(params?: {
        /** cluster */
        cluster: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * listConnectors
     */
    static connectors(params?: {
        /** cluster */
        cluster: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * getConnectorPlugins
     */
    static connectorPlugins(params?: {
        /** cluster */
        cluster: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * validateConfigs
     */
    static validate(params?: {
        /** cluster */
        cluster: string;
        /** connectorType */
        connectorType: string;
        /** connectorConfig */
        connectorConfig?: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * getConnectorInfo
     */
    static connectors1(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * getConnectorConfig
     */
    static config(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * putConnectorConfig
     */
    static config1(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
        /** forward */
        forward: boolean;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * getSingleConnectorStatus
     */
    static status(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * getConnectorTasksStatus
     */
    static status1(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
        /** tasknumber */
        tasknumber: number;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * getConnectorTasks
     */
    static tasks(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
    }, options?: IRequestOptions): Promise<any>;
}
export declare class ConnectorsLifecycleControllerService {
    /**
     * createConnector
     */
    static connector(params?: {
        /** cluster */
        cluster: string;
        /** connector-type-id */
        connectorTypeId: string;
        /** requestBody */
        body?: ConnectorInfo;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * deleteConnector
     */
    static connector1(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * pauseConnector
     */
    static pause(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * restartConnector
     */
    static restart(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * resumeConnector
     */
    static resume(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * restartTask
     */
    static restart1(params?: {
        /** cluster */
        cluster: string;
        /** connectorname */
        connectorname: string;
        /** tasknumber */
        tasknumber: number;
    }, options?: IRequestOptions): Promise<any>;
}
export interface AWSElasticBlockStoreVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    partition?: number;
    /**  */
    readOnly?: boolean;
    /**  */
    volumeID?: string;
}
export interface Affinity {
    /**  */
    nodeAffinity?: NodeAffinity;
    /**  */
    podAffinity?: PodAffinity;
    /**  */
    podAntiAffinity?: PodAntiAffinity;
}
export interface AzureDiskVolumeSource {
    /**  */
    cachingMode?: string;
    /**  */
    diskName?: string;
    /**  */
    diskURI?: string;
    /**  */
    fsType?: string;
    /**  */
    kind?: string;
    /**  */
    readOnly?: boolean;
}
export interface AzureFileVolumeSource {
    /**  */
    readOnly?: boolean;
    /**  */
    secretName?: string;
    /**  */
    shareName?: string;
}
export interface CSIVolumeSource {
    /**  */
    driver?: string;
    /**  */
    fsType?: string;
    /**  */
    nodePublishSecretRef?: LocalObjectReference;
    /**  */
    readOnly?: boolean;
    /**  */
    volumeAttributes?: object;
}
export interface Capabilities {
    /**  */
    add?: string[];
    /**  */
    drop?: string[];
}
export interface CephFSVolumeSource {
    /**  */
    monitors?: string[];
    /**  */
    path?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    secretFile?: string;
    /**  */
    secretRef?: LocalObjectReference;
    /**  */
    user?: string;
}
export interface CinderVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    secretRef?: LocalObjectReference;
    /**  */
    volumeID?: string;
}
export interface ConfigInfo {
    /**  */
    definition?: ConfigKeyInfo;
    /**  */
    value?: ConfigValueInfo;
}
export interface ConfigInfos {
    /**  */
    configs?: ConfigInfo[];
    /**  */
    error_count?: number;
    /**  */
    groups?: string[];
    /**  */
    name?: string;
}
export interface ConfigKeyInfo {
}
export interface ConfigMapEnvSource {
    /**  */
    name?: string;
    /**  */
    optional?: boolean;
}
export interface ConfigMapKeySelector {
    /**  */
    key?: string;
    /**  */
    name?: string;
    /**  */
    optional?: boolean;
}
export interface ConfigMapProjection {
    /**  */
    items?: KeyToPath[];
    /**  */
    name?: string;
    /**  */
    optional?: boolean;
}
export interface ConfigMapVolumeSource {
    /**  */
    defaultMode?: number;
    /**  */
    items?: KeyToPath[];
    /**  */
    name?: string;
    /**  */
    optional?: boolean;
}
export interface ConfigValueInfo {
    /**  */
    errors?: string[];
    /**  */
    name?: string;
    /**  */
    recommended_values?: string[];
    /**  */
    value?: string;
    /**  */
    visible?: boolean;
}
export interface ConnectClusterConfig {
    /**  */
    bootstrapServers?: string;
    /**  */
    groupId?: string;
    /**  */
    replicas?: number;
}
export interface ConnectConnectorStatus {
    /**  */
    state?: EnumConnectConnectorStatusState;
    /**  */
    worker_id?: string;
}
export interface ConnectConnectorStatusResponse {
    /**  */
    connector?: ConnectConnectorStatus;
    /**  */
    name?: string;
    /**  */
    tasks?: ConnectTaskStatus[];
    /**  */
    type?: EnumConnectConnectorStatusResponseType;
}
export interface ConnectTaskStatus {
    /**  */
    errorsAsList?: string[];
    /**  */
    id?: number;
    /**  */
    state?: EnumConnectTaskStatusState;
    /**  */
    trace?: string;
    /**  */
    worker_id?: string;
}
export interface ConnectTasksResponse {
    /**  */
    config?: object;
    /**  */
    id?: object;
}
export interface ConnectorDetail {
    /**  */
    info?: ConnectorInfo;
    /**  */
    name?: string;
    /**  */
    status?: ConnectorStateInfo;
}
export interface ConnectorInfo {
    /**  */
    config?: object;
    /**  */
    name?: string;
    /**  */
    tasks?: ConnectorTaskId[];
}
export interface ConnectorPlugin {
    /**  */
    class?: string;
    /**  */
    type?: string;
    /**  */
    version?: string;
}
export interface ConnectorState {
    /**  */
    state?: string;
    /**  */
    trace?: string;
    /**  */
    worker_id?: string;
}
export interface ConnectorStateInfo {
    /**  */
    connector?: ConnectorState;
    /**  */
    name?: string;
    /**  */
    tasks?: TaskState[];
    /**  */
    type?: EnumConnectorStateInfoType;
}
export interface ConnectorTaskId {
    /**  */
    connector?: string;
    /**  */
    task?: number;
}
export interface Container {
    /**  */
    args?: string[];
    /**  */
    command?: string[];
    /**  */
    env?: EnvVar[];
    /**  */
    envFrom?: EnvFromSource[];
    /**  */
    image?: string;
    /**  */
    imagePullPolicy?: string;
    /**  */
    lifecycle?: Lifecycle;
    /**  */
    livenessProbe?: Probe;
    /**  */
    name?: string;
    /**  */
    ports?: ContainerPort[];
    /**  */
    readinessProbe?: Probe;
    /**  */
    resources?: ResourceRequirements;
    /**  */
    securityContext?: SecurityContext;
    /**  */
    startupProbe?: Probe;
    /**  */
    stdin?: boolean;
    /**  */
    stdinOnce?: boolean;
    /**  */
    terminationMessagePath?: string;
    /**  */
    terminationMessagePolicy?: string;
    /**  */
    tty?: boolean;
    /**  */
    volumeDevices?: VolumeDevice[];
    /**  */
    volumeMounts?: VolumeMount[];
    /**  */
    workingDir?: string;
}
export interface ContainerPort {
    /**  */
    containerPort?: number;
    /**  */
    hostIP?: string;
    /**  */
    hostPort?: number;
    /**  */
    name?: string;
    /**  */
    protocol?: string;
}
export interface Deployment {
    /**  */
    apiVersion?: string;
    /**  */
    kind?: string;
    /**  */
    metadata?: ObjectMeta;
    /**  */
    spec?: DeploymentSpec;
    /**  */
    status?: DeploymentStatus;
}
export interface DeploymentCondition {
    /**  */
    lastTransitionTime?: string;
    /**  */
    lastUpdateTime?: string;
    /**  */
    message?: string;
    /**  */
    reason?: string;
    /**  */
    status?: string;
    /**  */
    type?: string;
}
export interface DeploymentSpec {
    /**  */
    minReadySeconds?: number;
    /**  */
    paused?: boolean;
    /**  */
    progressDeadlineSeconds?: number;
    /**  */
    replicas?: number;
    /**  */
    revisionHistoryLimit?: number;
    /**  */
    selector?: LabelSelector;
    /**  */
    strategy?: DeploymentStrategy;
    /**  */
    template?: PodTemplateSpec;
}
export interface DeploymentStatus {
    /**  */
    availableReplicas?: number;
    /**  */
    collisionCount?: number;
    /**  */
    conditions?: DeploymentCondition[];
    /**  */
    observedGeneration?: number;
    /**  */
    readyReplicas?: number;
    /**  */
    replicas?: number;
    /**  */
    unavailableReplicas?: number;
    /**  */
    updatedReplicas?: number;
}
export interface DeploymentStrategy {
    /**  */
    rollingUpdate?: RollingUpdateDeployment;
    /**  */
    type?: string;
}
export interface DownwardAPIProjection {
    /**  */
    items?: DownwardAPIVolumeFile[];
}
export interface DownwardAPIVolumeFile {
    /**  */
    fieldRef?: ObjectFieldSelector;
    /**  */
    mode?: number;
    /**  */
    path?: string;
    /**  */
    resourceFieldRef?: ResourceFieldSelector;
}
export interface DownwardAPIVolumeSource {
    /**  */
    defaultMode?: number;
    /**  */
    items?: DownwardAPIVolumeFile[];
}
export interface EmptyDirVolumeSource {
    /**  */
    medium?: string;
    /**  */
    sizeLimit?: Quantity;
}
export interface EnvFromSource {
    /**  */
    configMapRef?: ConfigMapEnvSource;
    /**  */
    prefix?: string;
    /**  */
    secretRef?: SecretEnvSource;
}
export interface EnvVar {
    /**  */
    name?: string;
    /**  */
    value?: string;
    /**  */
    valueFrom?: EnvVarSource;
}
export interface EnvVarSource {
    /**  */
    configMapKeyRef?: ConfigMapKeySelector;
    /**  */
    fieldRef?: ObjectFieldSelector;
    /**  */
    resourceFieldRef?: ResourceFieldSelector;
    /**  */
    secretKeyRef?: SecretKeySelector;
}
export interface EphemeralContainer {
    /**  */
    args?: string[];
    /**  */
    command?: string[];
    /**  */
    env?: EnvVar[];
    /**  */
    envFrom?: EnvFromSource[];
    /**  */
    image?: string;
    /**  */
    imagePullPolicy?: string;
    /**  */
    lifecycle?: Lifecycle;
    /**  */
    livenessProbe?: Probe;
    /**  */
    name?: string;
    /**  */
    ports?: ContainerPort[];
    /**  */
    readinessProbe?: Probe;
    /**  */
    resources?: ResourceRequirements;
    /**  */
    securityContext?: SecurityContext;
    /**  */
    startupProbe?: Probe;
    /**  */
    stdin?: boolean;
    /**  */
    stdinOnce?: boolean;
    /**  */
    targetContainerName?: string;
    /**  */
    terminationMessagePath?: string;
    /**  */
    terminationMessagePolicy?: string;
    /**  */
    tty?: boolean;
    /**  */
    volumeDevices?: VolumeDevice[];
    /**  */
    volumeMounts?: VolumeMount[];
    /**  */
    workingDir?: string;
}
export interface ExecAction {
    /**  */
    command?: string[];
}
export interface FCVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    lun?: number;
    /**  */
    readOnly?: boolean;
    /**  */
    targetWWNs?: string[];
    /**  */
    wwids?: string[];
}
export interface FieldsV1 {
}
export interface FlexVolumeSource {
    /**  */
    driver?: string;
    /**  */
    fsType?: string;
    /**  */
    options?: object;
    /**  */
    readOnly?: boolean;
    /**  */
    secretRef?: LocalObjectReference;
}
export interface FlockerVolumeSource {
    /**  */
    datasetName?: string;
    /**  */
    datasetUUID?: string;
}
export interface GCEPersistentDiskVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    partition?: number;
    /**  */
    pdName?: string;
    /**  */
    readOnly?: boolean;
}
export interface GitRepoVolumeSource {
    /**  */
    directory?: string;
    /**  */
    repository?: string;
    /**  */
    revision?: string;
}
export interface GlusterfsVolumeSource {
    /**  */
    endpoints?: string;
    /**  */
    path?: string;
    /**  */
    readOnly?: boolean;
}
export interface HTTPGetAction {
    /**  */
    host?: string;
    /**  */
    httpHeaders?: HTTPHeader[];
    /**  */
    path?: string;
    /**  */
    port?: IntOrString;
    /**  */
    scheme?: string;
}
export interface HTTPHeader {
    /**  */
    name?: string;
    /**  */
    value?: string;
}
export interface Handler {
    /**  */
    exec?: ExecAction;
    /**  */
    httpGet?: HTTPGetAction;
    /**  */
    tcpSocket?: TCPSocketAction;
}
export interface HostAlias {
    /**  */
    hostnames?: string[];
    /**  */
    ip?: string;
}
export interface HostPathVolumeSource {
    /**  */
    path?: string;
    /**  */
    type?: string;
}
export interface ISCSIVolumeSource {
    /**  */
    chapAuthDiscovery?: boolean;
    /**  */
    chapAuthSession?: boolean;
    /**  */
    fsType?: string;
    /**  */
    initiatorName?: string;
    /**  */
    iqn?: string;
    /**  */
    iscsiInterface?: string;
    /**  */
    lun?: number;
    /**  */
    portals?: string[];
    /**  */
    readOnly?: boolean;
    /**  */
    secretRef?: LocalObjectReference;
    /**  */
    targetPortal?: string;
}
export interface IntOrString {
    /**  */
    IntVal?: number;
    /**  */
    Kind?: number;
    /**  */
    StrVal?: string;
}
export interface KeyToPath {
    /**  */
    key?: string;
    /**  */
    mode?: number;
    /**  */
    path?: string;
}
export interface LabelSelector {
    /**  */
    matchExpressions?: LabelSelectorRequirement[];
    /**  */
    matchLabels?: object;
}
export interface LabelSelectorRequirement {
    /**  */
    key?: string;
    /**  */
    operator?: string;
    /**  */
    values?: string[];
}
export interface Lifecycle {
    /**  */
    postStart?: Handler;
    /**  */
    preStop?: Handler;
}
export interface LocalObjectReference {
    /**  */
    name?: string;
}
export interface ManagedFieldsEntry {
    /**  */
    apiVersion?: string;
    /**  */
    fieldsType?: string;
    /**  */
    fieldsV1?: FieldsV1;
    /**  */
    manager?: string;
    /**  */
    operation?: string;
    /**  */
    time?: string;
}
export interface ModelAndView {
    /**  */
    empty?: boolean;
    /**  */
    model?: object;
    /**  */
    modelMap?: object;
    /**  */
    reference?: boolean;
    /**  */
    status?: EnumModelAndViewStatus;
    /**  */
    view?: View;
    /**  */
    viewName?: string;
}
export interface NFSVolumeSource {
    /**  */
    path?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    server?: string;
}
export interface NodeAffinity {
    /**  */
    preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[];
    /**  */
    requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
}
export interface NodeSelector {
    /**  */
    nodeSelectorTerms?: NodeSelectorTerm[];
}
export interface NodeSelectorRequirement {
    /**  */
    key?: string;
    /**  */
    operator?: string;
    /**  */
    values?: string[];
}
export interface NodeSelectorTerm {
    /**  */
    matchExpressions?: NodeSelectorRequirement[];
    /**  */
    matchFields?: NodeSelectorRequirement[];
}
export interface ObjectFieldSelector {
    /**  */
    apiVersion?: string;
    /**  */
    fieldPath?: string;
}
export interface ObjectMeta {
    /**  */
    annotations?: object;
    /**  */
    clusterName?: string;
    /**  */
    creationTimestamp?: string;
    /**  */
    deletionGracePeriodSeconds?: number;
    /**  */
    deletionTimestamp?: string;
    /**  */
    finalizers?: string[];
    /**  */
    generateName?: string;
    /**  */
    generation?: number;
    /**  */
    labels?: object;
    /**  */
    managedFields?: ManagedFieldsEntry[];
    /**  */
    name?: string;
    /**  */
    namespace?: string;
    /**  */
    ownerReferences?: OwnerReference[];
    /**  */
    resourceVersion?: string;
    /**  */
    selfLink?: string;
    /**  */
    uid?: string;
}
export interface OwnerReference {
    /**  */
    apiVersion?: string;
    /**  */
    blockOwnerDeletion?: boolean;
    /**  */
    controller?: boolean;
    /**  */
    kind?: string;
    /**  */
    name?: string;
    /**  */
    uid?: string;
}
export interface PersistentVolumeClaimVolumeSource {
    /**  */
    claimName?: string;
    /**  */
    readOnly?: boolean;
}
export interface PhotonPersistentDiskVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    pdID?: string;
}
export interface PodAffinity {
    /**  */
    preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
    /**  */
    requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
export interface PodAffinityTerm {
    /**  */
    labelSelector?: LabelSelector;
    /**  */
    namespaces?: string[];
    /**  */
    topologyKey?: string;
}
export interface PodAntiAffinity {
    /**  */
    preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
    /**  */
    requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
export interface PodDNSConfig {
    /**  */
    nameservers?: string[];
    /**  */
    options?: PodDNSConfigOption[];
    /**  */
    searches?: string[];
}
export interface PodDNSConfigOption {
    /**  */
    name?: string;
    /**  */
    value?: string;
}
export interface PodReadinessGate {
    /**  */
    conditionType?: string;
}
export interface PodSecurityContext {
    /**  */
    fsGroup?: number;
    /**  */
    fsGroupChangePolicy?: string;
    /**  */
    runAsGroup?: number;
    /**  */
    runAsNonRoot?: boolean;
    /**  */
    runAsUser?: number;
    /**  */
    seLinuxOptions?: SELinuxOptions;
    /**  */
    supplementalGroups?: number[];
    /**  */
    sysctls?: Sysctl[];
    /**  */
    windowsOptions?: WindowsSecurityContextOptions;
}
export interface PodSpec {
    /**  */
    activeDeadlineSeconds?: number;
    /**  */
    affinity?: Affinity;
    /**  */
    automountServiceAccountToken?: boolean;
    /**  */
    containers?: Container[];
    /**  */
    dnsConfig?: PodDNSConfig;
    /**  */
    dnsPolicy?: string;
    /**  */
    enableServiceLinks?: boolean;
    /**  */
    ephemeralContainers?: EphemeralContainer[];
    /**  */
    hostAliases?: HostAlias[];
    /**  */
    hostIPC?: boolean;
    /**  */
    hostNetwork?: boolean;
    /**  */
    hostPID?: boolean;
    /**  */
    hostname?: string;
    /**  */
    imagePullSecrets?: LocalObjectReference[];
    /**  */
    initContainers?: Container[];
    /**  */
    nodeName?: string;
    /**  */
    nodeSelector?: object;
    /**  */
    overhead?: object;
    /**  */
    preemptionPolicy?: string;
    /**  */
    priority?: number;
    /**  */
    priorityClassName?: string;
    /**  */
    readinessGates?: PodReadinessGate[];
    /**  */
    restartPolicy?: string;
    /**  */
    runtimeClassName?: string;
    /**  */
    schedulerName?: string;
    /**  */
    securityContext?: PodSecurityContext;
    /**  */
    serviceAccount?: string;
    /**  */
    serviceAccountName?: string;
    /**  */
    shareProcessNamespace?: boolean;
    /**  */
    subdomain?: string;
    /**  */
    terminationGracePeriodSeconds?: number;
    /**  */
    tolerations?: Toleration[];
    /**  */
    topologySpreadConstraints?: TopologySpreadConstraint[];
    /**  */
    volumes?: Volume[];
}
export interface PodTemplateSpec {
    /**  */
    metadata?: ObjectMeta;
    /**  */
    spec?: PodSpec;
}
export interface PortworxVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    volumeID?: string;
}
export interface PreferredSchedulingTerm {
    /**  */
    preference?: NodeSelectorTerm;
    /**  */
    weight?: number;
}
export interface Probe {
    /**  */
    exec?: ExecAction;
    /**  */
    failureThreshold?: number;
    /**  */
    httpGet?: HTTPGetAction;
    /**  */
    initialDelaySeconds?: number;
    /**  */
    periodSeconds?: number;
    /**  */
    successThreshold?: number;
    /**  */
    tcpSocket?: TCPSocketAction;
    /**  */
    timeoutSeconds?: number;
}
export interface ProjectedVolumeSource {
    /**  */
    defaultMode?: number;
    /**  */
    sources?: VolumeProjection[];
}
export interface Quantity {
    /**  */
    amount?: string;
    /**  */
    format?: string;
}
export interface QuobyteVolumeSource {
    /**  */
    group?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    registry?: string;
    /**  */
    tenant?: string;
    /**  */
    user?: string;
    /**  */
    volume?: string;
}
export interface RBDVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    image?: string;
    /**  */
    keyring?: string;
    /**  */
    monitors?: string[];
    /**  */
    pool?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    secretRef?: LocalObjectReference;
    /**  */
    user?: string;
}
export interface ResourceFieldSelector {
    /**  */
    containerName?: string;
    /**  */
    divisor?: Quantity;
    /**  */
    resource?: string;
}
export interface ResourceRequirements {
    /**  */
    limits?: object;
    /**  */
    requests?: object;
}
export interface RollingUpdateDeployment {
    /**  */
    maxSurge?: IntOrString;
    /**  */
    maxUnavailable?: IntOrString;
}
export interface SELinuxOptions {
    /**  */
    level?: string;
    /**  */
    role?: string;
    /**  */
    type?: string;
    /**  */
    user?: string;
}
export interface ScaleIOVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    gateway?: string;
    /**  */
    protectionDomain?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    secretRef?: LocalObjectReference;
    /**  */
    sslEnabled?: boolean;
    /**  */
    storageMode?: string;
    /**  */
    storagePool?: string;
    /**  */
    system?: string;
    /**  */
    volumeName?: string;
}
export interface SecretEnvSource {
    /**  */
    name?: string;
    /**  */
    optional?: boolean;
}
export interface SecretKeySelector {
    /**  */
    key?: string;
    /**  */
    name?: string;
    /**  */
    optional?: boolean;
}
export interface SecretProjection {
    /**  */
    items?: KeyToPath[];
    /**  */
    name?: string;
    /**  */
    optional?: boolean;
}
export interface SecretVolumeSource {
    /**  */
    defaultMode?: number;
    /**  */
    items?: KeyToPath[];
    /**  */
    optional?: boolean;
    /**  */
    secretName?: string;
}
export interface SecurityContext {
    /**  */
    allowPrivilegeEscalation?: boolean;
    /**  */
    capabilities?: Capabilities;
    /**  */
    privileged?: boolean;
    /**  */
    procMount?: string;
    /**  */
    readOnlyRootFilesystem?: boolean;
    /**  */
    runAsGroup?: number;
    /**  */
    runAsNonRoot?: boolean;
    /**  */
    runAsUser?: number;
    /**  */
    seLinuxOptions?: SELinuxOptions;
    /**  */
    windowsOptions?: WindowsSecurityContextOptions;
}
export interface ServiceAccountTokenProjection {
    /**  */
    audience?: string;
    /**  */
    expirationSeconds?: number;
    /**  */
    path?: string;
}
export interface StorageOSVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    secretRef?: LocalObjectReference;
    /**  */
    volumeName?: string;
    /**  */
    volumeNamespace?: string;
}
export interface Sysctl {
    /**  */
    name?: string;
    /**  */
    value?: string;
}
export interface TCPSocketAction {
    /**  */
    host?: string;
    /**  */
    port?: IntOrString;
}
export interface TaskState {
    /**  */
    id?: number;
    /**  */
    state?: string;
    /**  */
    trace?: string;
    /**  */
    worker_id?: string;
}
export interface Toleration {
    /**  */
    effect?: string;
    /**  */
    key?: string;
    /**  */
    operator?: string;
    /**  */
    tolerationSeconds?: number;
    /**  */
    value?: string;
}
export interface TopologySpreadConstraint {
    /**  */
    labelSelector?: LabelSelector;
    /**  */
    maxSkew?: number;
    /**  */
    topologyKey?: string;
    /**  */
    whenUnsatisfiable?: string;
}
export interface View {
    /**  */
    contentType?: string;
}
export interface Volume {
    /**  */
    awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
    /**  */
    azureDisk?: AzureDiskVolumeSource;
    /**  */
    azureFile?: AzureFileVolumeSource;
    /**  */
    cephfs?: CephFSVolumeSource;
    /**  */
    cinder?: CinderVolumeSource;
    /**  */
    configMap?: ConfigMapVolumeSource;
    /**  */
    csi?: CSIVolumeSource;
    /**  */
    downwardAPI?: DownwardAPIVolumeSource;
    /**  */
    emptyDir?: EmptyDirVolumeSource;
    /**  */
    fc?: FCVolumeSource;
    /**  */
    flexVolume?: FlexVolumeSource;
    /**  */
    flocker?: FlockerVolumeSource;
    /**  */
    gcePersistentDisk?: GCEPersistentDiskVolumeSource;
    /**  */
    gitRepo?: GitRepoVolumeSource;
    /**  */
    glusterfs?: GlusterfsVolumeSource;
    /**  */
    hostPath?: HostPathVolumeSource;
    /**  */
    iscsi?: ISCSIVolumeSource;
    /**  */
    name?: string;
    /**  */
    nfs?: NFSVolumeSource;
    /**  */
    persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
    /**  */
    photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
    /**  */
    portworxVolume?: PortworxVolumeSource;
    /**  */
    projected?: ProjectedVolumeSource;
    /**  */
    quobyte?: QuobyteVolumeSource;
    /**  */
    rbd?: RBDVolumeSource;
    /**  */
    scaleIO?: ScaleIOVolumeSource;
    /**  */
    secret?: SecretVolumeSource;
    /**  */
    storageos?: StorageOSVolumeSource;
    /**  */
    vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
export interface VolumeDevice {
    /**  */
    devicePath?: string;
    /**  */
    name?: string;
}
export interface VolumeMount {
    /**  */
    mountPath?: string;
    /**  */
    mountPropagation?: string;
    /**  */
    name?: string;
    /**  */
    readOnly?: boolean;
    /**  */
    subPath?: string;
    /**  */
    subPathExpr?: string;
}
export interface VolumeProjection {
    /**  */
    configMap?: ConfigMapProjection;
    /**  */
    downwardAPI?: DownwardAPIProjection;
    /**  */
    secret?: SecretProjection;
    /**  */
    serviceAccountToken?: ServiceAccountTokenProjection;
}
export interface VsphereVirtualDiskVolumeSource {
    /**  */
    fsType?: string;
    /**  */
    storagePolicyID?: string;
    /**  */
    storagePolicyName?: string;
    /**  */
    volumePath?: string;
}
export interface WeightedPodAffinityTerm {
    /**  */
    podAffinityTerm?: PodAffinityTerm;
    /**  */
    weight?: number;
}
export interface WindowsSecurityContextOptions {
    /**  */
    gmsaCredentialSpec?: string;
    /**  */
    gmsaCredentialSpecName?: string;
    /**  */
    runAsUserName?: string;
}
export declare enum EnumConnectConnectorStatusState {
    'DESTROYED' = "DESTROYED",
    'FAILED' = "FAILED",
    'PAUSED' = "PAUSED",
    'RUNNING' = "RUNNING",
    'UNASSIGNED' = "UNASSIGNED"
}
export declare enum EnumConnectConnectorStatusResponseType {
    'sink' = "sink",
    'source' = "source"
}
export declare enum EnumConnectTaskStatusState {
    'DESTROYED' = "DESTROYED",
    'FAILED' = "FAILED",
    'PAUSED' = "PAUSED",
    'RUNNING' = "RUNNING",
    'UNASSIGNED' = "UNASSIGNED"
}
export declare enum EnumConnectorStateInfoType {
    'sink' = "sink",
    'source' = "source",
    'unknown' = "unknown"
}
export declare enum EnumModelAndViewStatus {
    'ACCEPTED' = "ACCEPTED",
    'ALREADY_REPORTED' = "ALREADY_REPORTED",
    'BAD_GATEWAY' = "BAD_GATEWAY",
    'BAD_REQUEST' = "BAD_REQUEST",
    'BANDWIDTH_LIMIT_EXCEEDED' = "BANDWIDTH_LIMIT_EXCEEDED",
    'CHECKPOINT' = "CHECKPOINT",
    'CONFLICT' = "CONFLICT",
    'CONTINUE' = "CONTINUE",
    'CREATED' = "CREATED",
    'DESTINATION_LOCKED' = "DESTINATION_LOCKED",
    'EXPECTATION_FAILED' = "EXPECTATION_FAILED",
    'FAILED_DEPENDENCY' = "FAILED_DEPENDENCY",
    'FORBIDDEN' = "FORBIDDEN",
    'FOUND' = "FOUND",
    'GATEWAY_TIMEOUT' = "GATEWAY_TIMEOUT",
    'GONE' = "GONE",
    'HTTP_VERSION_NOT_SUPPORTED' = "HTTP_VERSION_NOT_SUPPORTED",
    'IM_USED' = "IM_USED",
    'INSUFFICIENT_SPACE_ON_RESOURCE' = "INSUFFICIENT_SPACE_ON_RESOURCE",
    'INSUFFICIENT_STORAGE' = "INSUFFICIENT_STORAGE",
    'INTERNAL_SERVER_ERROR' = "INTERNAL_SERVER_ERROR",
    'I_AM_A_TEAPOT' = "I_AM_A_TEAPOT",
    'LENGTH_REQUIRED' = "LENGTH_REQUIRED",
    'LOCKED' = "LOCKED",
    'LOOP_DETECTED' = "LOOP_DETECTED",
    'METHOD_FAILURE' = "METHOD_FAILURE",
    'METHOD_NOT_ALLOWED' = "METHOD_NOT_ALLOWED",
    'MOVED_PERMANENTLY' = "MOVED_PERMANENTLY",
    'MOVED_TEMPORARILY' = "MOVED_TEMPORARILY",
    'MULTIPLE_CHOICES' = "MULTIPLE_CHOICES",
    'MULTI_STATUS' = "MULTI_STATUS",
    'NETWORK_AUTHENTICATION_REQUIRED' = "NETWORK_AUTHENTICATION_REQUIRED",
    'NON_AUTHORITATIVE_INFORMATION' = "NON_AUTHORITATIVE_INFORMATION",
    'NOT_ACCEPTABLE' = "NOT_ACCEPTABLE",
    'NOT_EXTENDED' = "NOT_EXTENDED",
    'NOT_FOUND' = "NOT_FOUND",
    'NOT_IMPLEMENTED' = "NOT_IMPLEMENTED",
    'NOT_MODIFIED' = "NOT_MODIFIED",
    'NO_CONTENT' = "NO_CONTENT",
    'OK' = "OK",
    'PARTIAL_CONTENT' = "PARTIAL_CONTENT",
    'PAYLOAD_TOO_LARGE' = "PAYLOAD_TOO_LARGE",
    'PAYMENT_REQUIRED' = "PAYMENT_REQUIRED",
    'PERMANENT_REDIRECT' = "PERMANENT_REDIRECT",
    'PRECONDITION_FAILED' = "PRECONDITION_FAILED",
    'PRECONDITION_REQUIRED' = "PRECONDITION_REQUIRED",
    'PROCESSING' = "PROCESSING",
    'PROXY_AUTHENTICATION_REQUIRED' = "PROXY_AUTHENTICATION_REQUIRED",
    'REQUESTED_RANGE_NOT_SATISFIABLE' = "REQUESTED_RANGE_NOT_SATISFIABLE",
    'REQUEST_ENTITY_TOO_LARGE' = "REQUEST_ENTITY_TOO_LARGE",
    'REQUEST_HEADER_FIELDS_TOO_LARGE' = "REQUEST_HEADER_FIELDS_TOO_LARGE",
    'REQUEST_TIMEOUT' = "REQUEST_TIMEOUT",
    'REQUEST_URI_TOO_LONG' = "REQUEST_URI_TOO_LONG",
    'RESET_CONTENT' = "RESET_CONTENT",
    'SEE_OTHER' = "SEE_OTHER",
    'SERVICE_UNAVAILABLE' = "SERVICE_UNAVAILABLE",
    'SWITCHING_PROTOCOLS' = "SWITCHING_PROTOCOLS",
    'TEMPORARY_REDIRECT' = "TEMPORARY_REDIRECT",
    'TOO_EARLY' = "TOO_EARLY",
    'TOO_MANY_REQUESTS' = "TOO_MANY_REQUESTS",
    'UNAUTHORIZED' = "UNAUTHORIZED",
    'UNAVAILABLE_FOR_LEGAL_REASONS' = "UNAVAILABLE_FOR_LEGAL_REASONS",
    'UNPROCESSABLE_ENTITY' = "UNPROCESSABLE_ENTITY",
    'UNSUPPORTED_MEDIA_TYPE' = "UNSUPPORTED_MEDIA_TYPE",
    'UPGRADE_REQUIRED' = "UPGRADE_REQUIRED",
    'URI_TOO_LONG' = "URI_TOO_LONG",
    'USE_PROXY' = "USE_PROXY",
    'VARIANT_ALSO_NEGOTIATES' = "VARIANT_ALSO_NEGOTIATES"
}
