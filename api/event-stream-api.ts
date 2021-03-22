/* tslint:disable */
/* eslint-disable */
/**
 * Socotra API Reference
 * Socotra REST API Description
 *
 * The version of the OpenAPI document: 1.3.191
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { EventPageResponse } from '../model';
/**
 * EventStreamApi - axios parameter creator
 * @export
 */
export const EventStreamApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary getEventsUsingGET
         * @param {number} [endTimestamp] 
         * @param {string} [eventType] 
         * @param {number} [pageSize] 
         * @param {string} [pagingToken] 
         * @param {number} [startTimestamp] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventsUsingGET: async (endTimestamp?: number, eventType?: string, pageSize?: number, pagingToken?: string, startTimestamp?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/eventstream/events`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (endTimestamp !== undefined) {
                localVarQueryParameter['endTimestamp'] = endTimestamp;
            }

            if (eventType !== undefined) {
                localVarQueryParameter['eventType'] = eventType;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (pagingToken !== undefined) {
                localVarQueryParameter['pagingToken'] = pagingToken;
            }

            if (startTimestamp !== undefined) {
                localVarQueryParameter['startTimestamp'] = startTimestamp;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventStreamApi - functional programming interface
 * @export
 */
export const EventStreamApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventStreamApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary getEventsUsingGET
         * @param {number} [endTimestamp] 
         * @param {string} [eventType] 
         * @param {number} [pageSize] 
         * @param {string} [pagingToken] 
         * @param {number} [startTimestamp] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventsUsingGET(endTimestamp?: number, eventType?: string, pageSize?: number, pagingToken?: string, startTimestamp?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventPageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEventsUsingGET(endTimestamp, eventType, pageSize, pagingToken, startTimestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventStreamApi - factory interface
 * @export
 */
export const EventStreamApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventStreamApiFp(configuration)
    return {
        /**
         * 
         * @summary getEventsUsingGET
         * @param {number} [endTimestamp] 
         * @param {string} [eventType] 
         * @param {number} [pageSize] 
         * @param {string} [pagingToken] 
         * @param {number} [startTimestamp] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventsUsingGET(endTimestamp?: number, eventType?: string, pageSize?: number, pagingToken?: string, startTimestamp?: number, options?: any): AxiosPromise<EventPageResponse> {
            return localVarFp.getEventsUsingGET(endTimestamp, eventType, pageSize, pagingToken, startTimestamp, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventStreamApi - object-oriented interface
 * @export
 * @class EventStreamApi
 * @extends {BaseAPI}
 */
export class EventStreamApi extends BaseAPI {
    /**
     * 
     * @summary getEventsUsingGET
     * @param {number} [endTimestamp] 
     * @param {string} [eventType] 
     * @param {number} [pageSize] 
     * @param {string} [pagingToken] 
     * @param {number} [startTimestamp] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStreamApi
     */
    public getEventsUsingGET(endTimestamp?: number, eventType?: string, pageSize?: number, pagingToken?: string, startTimestamp?: number, options?: any) {
        return EventStreamApiFp(this.configuration).getEventsUsingGET(endTimestamp, eventType, pageSize, pagingToken, startTimestamp, options).then((request) => request(this.axios, this.basePath));
    }
}