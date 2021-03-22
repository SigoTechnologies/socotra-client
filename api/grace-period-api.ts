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
import { GracePeriodResponse } from '../model';
/**
 * GracePeriodApi - axios parameter creator
 * @export
 */
export const GracePeriodApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary getGracePeriodUsingGET
         * @param {string} gracePeriodLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGracePeriodUsingGET: async (gracePeriodLocator: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'gracePeriodLocator' is not null or undefined
            assertParamExists('getGracePeriodUsingGET', 'gracePeriodLocator', gracePeriodLocator)
            const localVarPath = `/gracePeriod/{gracePeriodLocator}`
                .replace(`{${"gracePeriodLocator"}}`, encodeURIComponent(String(gracePeriodLocator)));
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
    }
};

/**
 * GracePeriodApi - functional programming interface
 * @export
 */
export const GracePeriodApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GracePeriodApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary getGracePeriodUsingGET
         * @param {string} gracePeriodLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGracePeriodUsingGET(gracePeriodLocator: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GracePeriodResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGracePeriodUsingGET(gracePeriodLocator, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GracePeriodApi - factory interface
 * @export
 */
export const GracePeriodApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GracePeriodApiFp(configuration)
    return {
        /**
         * 
         * @summary getGracePeriodUsingGET
         * @param {string} gracePeriodLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGracePeriodUsingGET(gracePeriodLocator: string, options?: any): AxiosPromise<GracePeriodResponse> {
            return localVarFp.getGracePeriodUsingGET(gracePeriodLocator, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GracePeriodApi - object-oriented interface
 * @export
 * @class GracePeriodApi
 * @extends {BaseAPI}
 */
export class GracePeriodApi extends BaseAPI {
    /**
     * 
     * @summary getGracePeriodUsingGET
     * @param {string} gracePeriodLocator 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GracePeriodApi
     */
    public getGracePeriodUsingGET(gracePeriodLocator: string, options?: any) {
        return GracePeriodApiFp(this.configuration).getGracePeriodUsingGET(gracePeriodLocator, options).then((request) => request(this.axios, this.basePath));
    }
}
