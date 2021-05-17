/** Generate by swagger-axios-codegen */
// @ts-ignore
/* eslint-disable */
// Add default options
export const serviceOptions = {};
// Instance selector
export function axios(configs, resolve, reject) {
    if (serviceOptions.axios) {
        return serviceOptions.axios
            .request(configs)
            .then(res => {
            resolve(res.data);
        })
            .catch(err => {
            reject(err);
        });
    }
    else {
        throw new Error('please inject yourself instance like axios  ');
    }
}
export function getConfigs(method, contentType, url, options) {
    const configs = { ...options, method, url };
    configs.headers = {
        ...options.headers,
        'Content-Type': contentType
    };
    return configs;
}
const basePath = '';
export class ListResultDto {
}
export class PagedResultDto {
}
// customer definition
// empty
export class BasicErrorControllerService {
    /**
     * errorHtml
     */
    static error(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/error';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * errorHtml
     */
    static error1(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/error';
            const configs = getConfigs('put', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * errorHtml
     */
    static error2(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/error';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * errorHtml
     */
    static error3(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/error';
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * errorHtml
     */
    static error4(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/error';
            const configs = getConfigs('options', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * errorHtml
     */
    static error5(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/error';
            const configs = getConfigs('head', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * errorHtml
     */
    static error6(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/error';
            const configs = getConfigs('patch', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * errorHtml
     */
    static error7(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/error';
            const configs = getConfigs('trace', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ConnectClustersControllerService {
    /**
     * addClusters
     */
    static connectClusters(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connect-clusters';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * getClusters
     */
    static list(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connect-clusters/list';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * deleteClusters
     */
    static connectClusters1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connect-clusters/{groupId}';
            url = url.replace('{groupId}', params['groupId'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ConnectorsControllerService {
    /**
     * listConnectorsExpand
     */
    static expand(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/expand/{cluster}';
            url = url.replace('{cluster}', params['cluster'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * listConnectors
     */
    static connectors(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}';
            url = url.replace('{cluster}', params['cluster'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * getConnectorPlugins
     */
    static connectorPlugins(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}/connector-plugins';
            url = url.replace('{cluster}', params['cluster'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * validateConfigs
     */
    static validate(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}/connector-plugins/{connectorType}/config/validate';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorType}', params['connectorType'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            configs.params = { connectorConfig: params['connectorConfig'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * getConnectorInfo
     */
    static connectors1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}/{connectorname}';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * getConnectorConfig
     */
    static config(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}/{connectorname}/config';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * putConnectorConfig
     */
    static config1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}/{connectorname}/config';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            configs.params = { forward: params['forward'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * getSingleConnectorStatus
     */
    static status(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}/{connectorname}/status';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * getConnectorTasksStatus
     */
    static status1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}/{connectorname}/task/{tasknumber}/status';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            url = url.replace('{tasknumber}', params['tasknumber'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * getConnectorTasks
     */
    static tasks(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connectors/{cluster}/{connectorname}/tasks';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ConnectorsLifecycleControllerService {
    /**
     * createConnector
     */
    static connector(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connector/{cluster}/{connector-type-id}';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connector-type-id}', params['connectorTypeId'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * deleteConnector
     */
    static connector1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connector/{cluster}/{connectorname}';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * pauseConnector
     */
    static pause(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connector/{cluster}/{connectorname}/pause';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * restartConnector
     */
    static restart(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connector/{cluster}/{connectorname}/restart';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * resumeConnector
     */
    static resume(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connector/{cluster}/{connectorname}/resume';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * restartTask
     */
    static restart1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/data-pipeline/connector/{cluster}/{connectorname}/task/{tasknumber}/restart';
            url = url.replace('{cluster}', params['cluster'] + '');
            url = url.replace('{connectorname}', params['connectorname'] + '');
            url = url.replace('{tasknumber}', params['tasknumber'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export var EnumConnectConnectorStatusState;
(function (EnumConnectConnectorStatusState) {
    EnumConnectConnectorStatusState["DESTROYED"] = "DESTROYED";
    EnumConnectConnectorStatusState["FAILED"] = "FAILED";
    EnumConnectConnectorStatusState["PAUSED"] = "PAUSED";
    EnumConnectConnectorStatusState["RUNNING"] = "RUNNING";
    EnumConnectConnectorStatusState["UNASSIGNED"] = "UNASSIGNED";
})(EnumConnectConnectorStatusState || (EnumConnectConnectorStatusState = {}));
export var EnumConnectConnectorStatusResponseType;
(function (EnumConnectConnectorStatusResponseType) {
    EnumConnectConnectorStatusResponseType["sink"] = "sink";
    EnumConnectConnectorStatusResponseType["source"] = "source";
})(EnumConnectConnectorStatusResponseType || (EnumConnectConnectorStatusResponseType = {}));
export var EnumConnectTaskStatusState;
(function (EnumConnectTaskStatusState) {
    EnumConnectTaskStatusState["DESTROYED"] = "DESTROYED";
    EnumConnectTaskStatusState["FAILED"] = "FAILED";
    EnumConnectTaskStatusState["PAUSED"] = "PAUSED";
    EnumConnectTaskStatusState["RUNNING"] = "RUNNING";
    EnumConnectTaskStatusState["UNASSIGNED"] = "UNASSIGNED";
})(EnumConnectTaskStatusState || (EnumConnectTaskStatusState = {}));
export var EnumConnectorStateInfoType;
(function (EnumConnectorStateInfoType) {
    EnumConnectorStateInfoType["sink"] = "sink";
    EnumConnectorStateInfoType["source"] = "source";
    EnumConnectorStateInfoType["unknown"] = "unknown";
})(EnumConnectorStateInfoType || (EnumConnectorStateInfoType = {}));
export var EnumModelAndViewStatus;
(function (EnumModelAndViewStatus) {
    EnumModelAndViewStatus["ACCEPTED"] = "ACCEPTED";
    EnumModelAndViewStatus["ALREADY_REPORTED"] = "ALREADY_REPORTED";
    EnumModelAndViewStatus["BAD_GATEWAY"] = "BAD_GATEWAY";
    EnumModelAndViewStatus["BAD_REQUEST"] = "BAD_REQUEST";
    EnumModelAndViewStatus["BANDWIDTH_LIMIT_EXCEEDED"] = "BANDWIDTH_LIMIT_EXCEEDED";
    EnumModelAndViewStatus["CHECKPOINT"] = "CHECKPOINT";
    EnumModelAndViewStatus["CONFLICT"] = "CONFLICT";
    EnumModelAndViewStatus["CONTINUE"] = "CONTINUE";
    EnumModelAndViewStatus["CREATED"] = "CREATED";
    EnumModelAndViewStatus["DESTINATION_LOCKED"] = "DESTINATION_LOCKED";
    EnumModelAndViewStatus["EXPECTATION_FAILED"] = "EXPECTATION_FAILED";
    EnumModelAndViewStatus["FAILED_DEPENDENCY"] = "FAILED_DEPENDENCY";
    EnumModelAndViewStatus["FORBIDDEN"] = "FORBIDDEN";
    EnumModelAndViewStatus["FOUND"] = "FOUND";
    EnumModelAndViewStatus["GATEWAY_TIMEOUT"] = "GATEWAY_TIMEOUT";
    EnumModelAndViewStatus["GONE"] = "GONE";
    EnumModelAndViewStatus["HTTP_VERSION_NOT_SUPPORTED"] = "HTTP_VERSION_NOT_SUPPORTED";
    EnumModelAndViewStatus["IM_USED"] = "IM_USED";
    EnumModelAndViewStatus["INSUFFICIENT_SPACE_ON_RESOURCE"] = "INSUFFICIENT_SPACE_ON_RESOURCE";
    EnumModelAndViewStatus["INSUFFICIENT_STORAGE"] = "INSUFFICIENT_STORAGE";
    EnumModelAndViewStatus["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    EnumModelAndViewStatus["I_AM_A_TEAPOT"] = "I_AM_A_TEAPOT";
    EnumModelAndViewStatus["LENGTH_REQUIRED"] = "LENGTH_REQUIRED";
    EnumModelAndViewStatus["LOCKED"] = "LOCKED";
    EnumModelAndViewStatus["LOOP_DETECTED"] = "LOOP_DETECTED";
    EnumModelAndViewStatus["METHOD_FAILURE"] = "METHOD_FAILURE";
    EnumModelAndViewStatus["METHOD_NOT_ALLOWED"] = "METHOD_NOT_ALLOWED";
    EnumModelAndViewStatus["MOVED_PERMANENTLY"] = "MOVED_PERMANENTLY";
    EnumModelAndViewStatus["MOVED_TEMPORARILY"] = "MOVED_TEMPORARILY";
    EnumModelAndViewStatus["MULTIPLE_CHOICES"] = "MULTIPLE_CHOICES";
    EnumModelAndViewStatus["MULTI_STATUS"] = "MULTI_STATUS";
    EnumModelAndViewStatus["NETWORK_AUTHENTICATION_REQUIRED"] = "NETWORK_AUTHENTICATION_REQUIRED";
    EnumModelAndViewStatus["NON_AUTHORITATIVE_INFORMATION"] = "NON_AUTHORITATIVE_INFORMATION";
    EnumModelAndViewStatus["NOT_ACCEPTABLE"] = "NOT_ACCEPTABLE";
    EnumModelAndViewStatus["NOT_EXTENDED"] = "NOT_EXTENDED";
    EnumModelAndViewStatus["NOT_FOUND"] = "NOT_FOUND";
    EnumModelAndViewStatus["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
    EnumModelAndViewStatus["NOT_MODIFIED"] = "NOT_MODIFIED";
    EnumModelAndViewStatus["NO_CONTENT"] = "NO_CONTENT";
    EnumModelAndViewStatus["OK"] = "OK";
    EnumModelAndViewStatus["PARTIAL_CONTENT"] = "PARTIAL_CONTENT";
    EnumModelAndViewStatus["PAYLOAD_TOO_LARGE"] = "PAYLOAD_TOO_LARGE";
    EnumModelAndViewStatus["PAYMENT_REQUIRED"] = "PAYMENT_REQUIRED";
    EnumModelAndViewStatus["PERMANENT_REDIRECT"] = "PERMANENT_REDIRECT";
    EnumModelAndViewStatus["PRECONDITION_FAILED"] = "PRECONDITION_FAILED";
    EnumModelAndViewStatus["PRECONDITION_REQUIRED"] = "PRECONDITION_REQUIRED";
    EnumModelAndViewStatus["PROCESSING"] = "PROCESSING";
    EnumModelAndViewStatus["PROXY_AUTHENTICATION_REQUIRED"] = "PROXY_AUTHENTICATION_REQUIRED";
    EnumModelAndViewStatus["REQUESTED_RANGE_NOT_SATISFIABLE"] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    EnumModelAndViewStatus["REQUEST_ENTITY_TOO_LARGE"] = "REQUEST_ENTITY_TOO_LARGE";
    EnumModelAndViewStatus["REQUEST_HEADER_FIELDS_TOO_LARGE"] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    EnumModelAndViewStatus["REQUEST_TIMEOUT"] = "REQUEST_TIMEOUT";
    EnumModelAndViewStatus["REQUEST_URI_TOO_LONG"] = "REQUEST_URI_TOO_LONG";
    EnumModelAndViewStatus["RESET_CONTENT"] = "RESET_CONTENT";
    EnumModelAndViewStatus["SEE_OTHER"] = "SEE_OTHER";
    EnumModelAndViewStatus["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    EnumModelAndViewStatus["SWITCHING_PROTOCOLS"] = "SWITCHING_PROTOCOLS";
    EnumModelAndViewStatus["TEMPORARY_REDIRECT"] = "TEMPORARY_REDIRECT";
    EnumModelAndViewStatus["TOO_EARLY"] = "TOO_EARLY";
    EnumModelAndViewStatus["TOO_MANY_REQUESTS"] = "TOO_MANY_REQUESTS";
    EnumModelAndViewStatus["UNAUTHORIZED"] = "UNAUTHORIZED";
    EnumModelAndViewStatus["UNAVAILABLE_FOR_LEGAL_REASONS"] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    EnumModelAndViewStatus["UNPROCESSABLE_ENTITY"] = "UNPROCESSABLE_ENTITY";
    EnumModelAndViewStatus["UNSUPPORTED_MEDIA_TYPE"] = "UNSUPPORTED_MEDIA_TYPE";
    EnumModelAndViewStatus["UPGRADE_REQUIRED"] = "UPGRADE_REQUIRED";
    EnumModelAndViewStatus["URI_TOO_LONG"] = "URI_TOO_LONG";
    EnumModelAndViewStatus["USE_PROXY"] = "USE_PROXY";
    EnumModelAndViewStatus["VARIANT_ALSO_NEGOTIATES"] = "VARIANT_ALSO_NEGOTIATES";
})(EnumModelAndViewStatus || (EnumModelAndViewStatus = {}));
//# sourceMappingURL=indexv3.js.map