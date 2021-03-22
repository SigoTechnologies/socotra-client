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
import { Claim3PageResponse } from '../model';
// @ts-ignore
import { SubClaimPayableCreateRequest } from '../model';
// @ts-ignore
import { SubClaimPayableResponse } from '../model';
// @ts-ignore
import { SubClaimPayableReverseRequest } from '../model';
/**
 * ClaimsApi - axios parameter creator
 * @export
 */
export const ClaimsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary createPayableOnSubClaimUsingPOST
         * @param {SubClaimPayableCreateRequest} request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPayableOnSubClaimUsingPOST: async (request: SubClaimPayableCreateRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'request' is not null or undefined
            assertParamExists('createPayableOnSubClaimUsingPOST', 'request', request)
            const localVarPath = `/claims/payables`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary getPayableByLocatorUsingGET
         * @param {string} payableLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPayableByLocatorUsingGET: async (payableLocator: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'payableLocator' is not null or undefined
            assertParamExists('getPayableByLocatorUsingGET', 'payableLocator', payableLocator)
            const localVarPath = `/claims/payables/{payableLocator}`
                .replace(`{${"payableLocator"}}`, encodeURIComponent(String(payableLocator)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary listClaimsUsingGET
         * @param {number} [createdAfterTimestamp] Created after time-stamp.
         * @param {number} [createdBeforeTimestap] Created before time-stamp.
         * @param {number} [pageSize] Page size.
         * @param {string} [pagingToken] Paging token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listClaimsUsingGET: async (createdAfterTimestamp?: number, createdBeforeTimestap?: number, pageSize?: number, pagingToken?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/claims`;
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

            if (createdBeforeTimestap !== undefined) {
                localVarQueryParameter['createdBeforeTimestap'] = createdBeforeTimestap;
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
        /**
         * 
         * @summary reversePayableOnSubClaimUsingPOST
         * @param {SubClaimPayableReverseRequest} reversalRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reversePayableOnSubClaimUsingPOST: async (reversalRequest: SubClaimPayableReverseRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'reversalRequest' is not null or undefined
            assertParamExists('reversePayableOnSubClaimUsingPOST', 'reversalRequest', reversalRequest)
            const localVarPath = `/claims/payables/reversals`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reversalRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClaimsApi - functional programming interface
 * @export
 */
export const ClaimsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClaimsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary createPayableOnSubClaimUsingPOST
         * @param {SubClaimPayableCreateRequest} request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPayableOnSubClaimUsingPOST(request: SubClaimPayableCreateRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubClaimPayableResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPayableOnSubClaimUsingPOST(request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary getPayableByLocatorUsingGET
         * @param {string} payableLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPayableByLocatorUsingGET(payableLocator: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubClaimPayableResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPayableByLocatorUsingGET(payableLocator, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary listClaimsUsingGET
         * @param {number} [createdAfterTimestamp] Created after time-stamp.
         * @param {number} [createdBeforeTimestap] Created before time-stamp.
         * @param {number} [pageSize] Page size.
         * @param {string} [pagingToken] Paging token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listClaimsUsingGET(createdAfterTimestamp?: number, createdBeforeTimestap?: number, pageSize?: number, pagingToken?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Claim3PageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listClaimsUsingGET(createdAfterTimestamp, createdBeforeTimestap, pageSize, pagingToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary reversePayableOnSubClaimUsingPOST
         * @param {SubClaimPayableReverseRequest} reversalRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reversePayableOnSubClaimUsingPOST(reversalRequest: SubClaimPayableReverseRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubClaimPayableResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reversePayableOnSubClaimUsingPOST(reversalRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClaimsApi - factory interface
 * @export
 */
export const ClaimsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClaimsApiFp(configuration)
    return {
        /**
         * 
         * @summary createPayableOnSubClaimUsingPOST
         * @param {SubClaimPayableCreateRequest} request 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPayableOnSubClaimUsingPOST(request: SubClaimPayableCreateRequest, options?: any): AxiosPromise<SubClaimPayableResponse> {
            return localVarFp.createPayableOnSubClaimUsingPOST(request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary getPayableByLocatorUsingGET
         * @param {string} payableLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPayableByLocatorUsingGET(payableLocator: string, options?: any): AxiosPromise<SubClaimPayableResponse> {
            return localVarFp.getPayableByLocatorUsingGET(payableLocator, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary listClaimsUsingGET
         * @param {number} [createdAfterTimestamp] Created after time-stamp.
         * @param {number} [createdBeforeTimestap] Created before time-stamp.
         * @param {number} [pageSize] Page size.
         * @param {string} [pagingToken] Paging token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listClaimsUsingGET(createdAfterTimestamp?: number, createdBeforeTimestap?: number, pageSize?: number, pagingToken?: string, options?: any): AxiosPromise<Claim3PageResponse> {
            return localVarFp.listClaimsUsingGET(createdAfterTimestamp, createdBeforeTimestap, pageSize, pagingToken, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary reversePayableOnSubClaimUsingPOST
         * @param {SubClaimPayableReverseRequest} reversalRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reversePayableOnSubClaimUsingPOST(reversalRequest: SubClaimPayableReverseRequest, options?: any): AxiosPromise<SubClaimPayableResponse> {
            return localVarFp.reversePayableOnSubClaimUsingPOST(reversalRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClaimsApi - object-oriented interface
 * @export
 * @class ClaimsApi
 * @extends {BaseAPI}
 */
export class ClaimsApi extends BaseAPI {
    /**
     * 
     * @summary createPayableOnSubClaimUsingPOST
     * @param {SubClaimPayableCreateRequest} request 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClaimsApi
     */
    public createPayableOnSubClaimUsingPOST(request: SubClaimPayableCreateRequest, options?: any) {
        return ClaimsApiFp(this.configuration).createPayableOnSubClaimUsingPOST(request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary getPayableByLocatorUsingGET
     * @param {string} payableLocator 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClaimsApi
     */
    public getPayableByLocatorUsingGET(payableLocator: string, options?: any) {
        return ClaimsApiFp(this.configuration).getPayableByLocatorUsingGET(payableLocator, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary listClaimsUsingGET
     * @param {number} [createdAfterTimestamp] Created after time-stamp.
     * @param {number} [createdBeforeTimestap] Created before time-stamp.
     * @param {number} [pageSize] Page size.
     * @param {string} [pagingToken] Paging token.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClaimsApi
     */
    public listClaimsUsingGET(createdAfterTimestamp?: number, createdBeforeTimestap?: number, pageSize?: number, pagingToken?: string, options?: any) {
        return ClaimsApiFp(this.configuration).listClaimsUsingGET(createdAfterTimestamp, createdBeforeTimestap, pageSize, pagingToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary reversePayableOnSubClaimUsingPOST
     * @param {SubClaimPayableReverseRequest} reversalRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClaimsApi
     */
    public reversePayableOnSubClaimUsingPOST(reversalRequest: SubClaimPayableReverseRequest, options?: any) {
        return ClaimsApiFp(this.configuration).reversePayableOnSubClaimUsingPOST(reversalRequest, options).then((request) => request(this.axios, this.basePath));
    }
}