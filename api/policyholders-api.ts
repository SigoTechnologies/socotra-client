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
import { Policyholder3PageResponse } from '../model';
/**
 * PolicyholdersApi - axios parameter creator
 * @export
 */
export const PolicyholdersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary getPolicyholdersUsingGET
         * @param {number} [createdAfterTimestamp] 
         * @param {number} [createdBeforeTimestamp] 
         * @param {number} [pageSize] 
         * @param {string} [pagingToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPolicyholdersUsingGET: async (createdAfterTimestamp?: number, createdBeforeTimestamp?: number, pageSize?: number, pagingToken?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/policyholders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (createdAfterTimestamp !== undefined) {
                localVarQueryParameter['createdAfterTimestamp'] = createdAfterTimestamp;
            }

            if (createdBeforeTimestamp !== undefined) {
                localVarQueryParameter['createdBeforeTimestamp'] = createdBeforeTimestamp;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (pagingToken !== undefined) {
                localVarQueryParameter['pagingToken'] = pagingToken;
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
 * PolicyholdersApi - functional programming interface
 * @export
 */
export const PolicyholdersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PolicyholdersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary getPolicyholdersUsingGET
         * @param {number} [createdAfterTimestamp] 
         * @param {number} [createdBeforeTimestamp] 
         * @param {number} [pageSize] 
         * @param {string} [pagingToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPolicyholdersUsingGET(createdAfterTimestamp?: number, createdBeforeTimestamp?: number, pageSize?: number, pagingToken?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Policyholder3PageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPolicyholdersUsingGET(createdAfterTimestamp, createdBeforeTimestamp, pageSize, pagingToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PolicyholdersApi - factory interface
 * @export
 */
export const PolicyholdersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PolicyholdersApiFp(configuration)
    return {
        /**
         * 
         * @summary getPolicyholdersUsingGET
         * @param {number} [createdAfterTimestamp] 
         * @param {number} [createdBeforeTimestamp] 
         * @param {number} [pageSize] 
         * @param {string} [pagingToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPolicyholdersUsingGET(createdAfterTimestamp?: number, createdBeforeTimestamp?: number, pageSize?: number, pagingToken?: string, options?: any): AxiosPromise<Policyholder3PageResponse> {
            return localVarFp.getPolicyholdersUsingGET(createdAfterTimestamp, createdBeforeTimestamp, pageSize, pagingToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PolicyholdersApi - object-oriented interface
 * @export
 * @class PolicyholdersApi
 * @extends {BaseAPI}
 */
export class PolicyholdersApi extends BaseAPI {
    /**
     * 
     * @summary getPolicyholdersUsingGET
     * @param {number} [createdAfterTimestamp] 
     * @param {number} [createdBeforeTimestamp] 
     * @param {number} [pageSize] 
     * @param {string} [pagingToken] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyholdersApi
     */
    public getPolicyholdersUsingGET(createdAfterTimestamp?: number, createdBeforeTimestamp?: number, pageSize?: number, pagingToken?: string, options?: any) {
        return PolicyholdersApiFp(this.configuration).getPolicyholdersUsingGET(createdAfterTimestamp, createdBeforeTimestamp, pageSize, pagingToken, options).then((request) => request(this.axios, this.basePath));
    }
}
