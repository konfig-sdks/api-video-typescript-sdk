/* tslint:disable */
/* eslint-disable */
/*
api.video

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BadRequest } from '../models';
// @ts-ignore
import { NotFound } from '../models';
// @ts-ignore
import { Webhook } from '../models';
// @ts-ignore
import { WebhooksCreationPayload } from '../models';
// @ts-ignore
import { WebhooksListResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WebhooksApi - axios parameter creator
 * @export
 */
export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events:  * ```video.encoding.quality.completed``` Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed. * ```live-stream.broadcast.started```  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * ```live-stream.broadcast.ended```  This event fires when a live stream has finished broadcasting. * ```video.source.recorded```  This event occurs when a live stream is recorded and submitted for encoding.
         * @summary Create Webhook
         * @param {WebhooksCreationPayload} webhooksCreationPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhookEvent: async (webhooksCreationPayload: WebhooksCreationPayload, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhooksCreationPayload' is not null or undefined
            assertParamExists('createWebhookEvent', 'webhooksCreationPayload', webhooksCreationPayload)
            const localVarPath = `/webhooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: webhooksCreationPayload,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/webhooks',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(webhooksCreationPayload, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint will delete the indicated webhook.
         * @summary Delete a Webhook
         * @param {string} webhookId The webhook you wish to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: async (webhookId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhookId' is not null or undefined
            assertParamExists('deleteWebhook', 'webhookId', webhookId)
            const localVarPath = `/webhooks/{webhookId}`
                .replace(`{${"webhookId"}}`, encodeURIComponent(String(webhookId !== undefined ? webhookId : `-webhookId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/webhooks/{webhookId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve webhook details by id.
         * @summary Retrieve Webhook details
         * @param {string} webhookId The unique webhook you wish to retreive details on.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetailsById: async (webhookId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhookId' is not null or undefined
            assertParamExists('getDetailsById', 'webhookId', webhookId)
            const localVarPath = `/webhooks/{webhookId}`
                .replace(`{${"webhookId"}}`, encodeURIComponent(String(webhookId !== undefined ? webhookId : `-webhookId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/webhooks/{webhookId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a list of all webhooks configured for the current workspace.
         * @summary List all webhooks
         * @param {string} [events] The webhook event that you wish to filter on.
         * @param {number} [currentPage] Choose the number of search results to return per page. Minimum value: 1
         * @param {number} [pageSize] Results per page. Allowed values 1-100, default is 25.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (events?: string, currentPage?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            if (events !== undefined) {
                localVarQueryParameter['events'] = events;
            }

            if (currentPage !== undefined) {
                localVarQueryParameter['currentPage'] = currentPage;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/webhooks',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events:  * ```video.encoding.quality.completed``` Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed. * ```live-stream.broadcast.started```  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * ```live-stream.broadcast.ended```  This event fires when a live stream has finished broadcasting. * ```video.source.recorded```  This event occurs when a live stream is recorded and submitted for encoding.
         * @summary Create Webhook
         * @param {WebhooksApiCreateWebhookEventRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWebhookEvent(requestParameters: WebhooksApiCreateWebhookEventRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhook>> {
            const webhooksCreationPayload: WebhooksCreationPayload = {
                events: requestParameters.events,
                url: requestParameters.url
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWebhookEvent(webhooksCreationPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint will delete the indicated webhook.
         * @summary Delete a Webhook
         * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebhook(requestParameters.webhookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve webhook details by id.
         * @summary Retrieve Webhook details
         * @param {WebhooksApiGetDetailsByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetailsById(requestParameters: WebhooksApiGetDetailsByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetailsById(requestParameters.webhookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a list of all webhooks configured for the current workspace.
         * @summary List all webhooks
         * @param {WebhooksApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: WebhooksApiListAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.events, requestParameters.currentPage, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhooksApi - factory interface
 * @export
 */
export const WebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhooksApiFp(configuration)
    return {
        /**
         * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events:  * ```video.encoding.quality.completed``` Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed. * ```live-stream.broadcast.started```  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * ```live-stream.broadcast.ended```  This event fires when a live stream has finished broadcasting. * ```video.source.recorded```  This event occurs when a live stream is recorded and submitted for encoding.
         * @summary Create Webhook
         * @param {WebhooksApiCreateWebhookEventRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhookEvent(requestParameters: WebhooksApiCreateWebhookEventRequest, options?: AxiosRequestConfig): AxiosPromise<Webhook> {
            return localVarFp.createWebhookEvent(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint will delete the indicated webhook.
         * @summary Delete a Webhook
         * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve webhook details by id.
         * @summary Retrieve Webhook details
         * @param {WebhooksApiGetDetailsByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetailsById(requestParameters: WebhooksApiGetDetailsByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Webhook> {
            return localVarFp.getDetailsById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all webhooks configured for the current workspace.
         * @summary List all webhooks
         * @param {WebhooksApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: WebhooksApiListAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<WebhooksListResponse> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createWebhookEvent operation in WebhooksApi.
 * @export
 * @interface WebhooksApiCreateWebhookEventRequest
 */
export type WebhooksApiCreateWebhookEventRequest = {
    
} & WebhooksCreationPayload

/**
 * Request parameters for deleteWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiDeleteWebhookRequest
 */
export type WebhooksApiDeleteWebhookRequest = {
    
    /**
    * The webhook you wish to delete.
    * @type {string}
    * @memberof WebhooksApiDeleteWebhook
    */
    readonly webhookId: string
    
}

/**
 * Request parameters for getDetailsById operation in WebhooksApi.
 * @export
 * @interface WebhooksApiGetDetailsByIdRequest
 */
export type WebhooksApiGetDetailsByIdRequest = {
    
    /**
    * The unique webhook you wish to retreive details on.
    * @type {string}
    * @memberof WebhooksApiGetDetailsById
    */
    readonly webhookId: string
    
}

/**
 * Request parameters for listAll operation in WebhooksApi.
 * @export
 * @interface WebhooksApiListAllRequest
 */
export type WebhooksApiListAllRequest = {
    
    /**
    * The webhook event that you wish to filter on.
    * @type {string}
    * @memberof WebhooksApiListAll
    */
    readonly events?: string
    
    /**
    * Choose the number of search results to return per page. Minimum value: 1
    * @type {number}
    * @memberof WebhooksApiListAll
    */
    readonly currentPage?: number
    
    /**
    * Results per page. Allowed values 1-100, default is 25.
    * @type {number}
    * @memberof WebhooksApiListAll
    */
    readonly pageSize?: number
    
}

/**
 * WebhooksApiGenerated - object-oriented interface
 * @export
 * @class WebhooksApiGenerated
 * @extends {BaseAPI}
 */
export class WebhooksApiGenerated extends BaseAPI {
    /**
     * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events:  * ```video.encoding.quality.completed``` Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed. * ```live-stream.broadcast.started```  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * ```live-stream.broadcast.ended```  This event fires when a live stream has finished broadcasting. * ```video.source.recorded```  This event occurs when a live stream is recorded and submitted for encoding.
     * @summary Create Webhook
     * @param {WebhooksApiCreateWebhookEventRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public createWebhookEvent(requestParameters: WebhooksApiCreateWebhookEventRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).createWebhookEvent(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint will delete the indicated webhook.
     * @summary Delete a Webhook
     * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).deleteWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve webhook details by id.
     * @summary Retrieve Webhook details
     * @param {WebhooksApiGetDetailsByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public getDetailsById(requestParameters: WebhooksApiGetDetailsByIdRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).getDetailsById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of all webhooks configured for the current workspace.
     * @summary List all webhooks
     * @param {WebhooksApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public listAll(requestParameters: WebhooksApiListAllRequest = {}, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
