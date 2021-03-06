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
import { LapseResponse } from '../model';
/**
 * LapseApi - axios parameter creator
 * @export
 */
export const LapseApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary getLapseByLocatorUsingGET
         * @param {string} lapseLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLapseByLocatorUsingGET: async (lapseLocator: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'lapseLocator' is not null or undefined
            assertParamExists('getLapseByLocatorUsingGET', 'lapseLocator', lapseLocator)
            const localVarPath = `/lapse/{lapseLocator}`
                .replace(`{${"lapseLocator"}}`, encodeURIComponent(String(lapseLocator)));
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
 * LapseApi - functional programming interface
 * @export
 */
export const LapseApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LapseApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary getLapseByLocatorUsingGET
         * @param {string} lapseLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLapseByLocatorUsingGET(lapseLocator: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LapseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLapseByLocatorUsingGET(lapseLocator, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LapseApi - factory interface
 * @export
 */
export const LapseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LapseApiFp(configuration)
    return {
        /**
         * 
         * @summary getLapseByLocatorUsingGET
         * @param {string} lapseLocator 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLapseByLocatorUsingGET(lapseLocator: string, options?: any): AxiosPromise<LapseResponse> {
            return localVarFp.getLapseByLocatorUsingGET(lapseLocator, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LapseApi - object-oriented interface
 * @export
 * @class LapseApi
 * @extends {BaseAPI}
 */
export class LapseApi extends BaseAPI {
    /**
     * 
     * @summary getLapseByLocatorUsingGET
     * @param {string} lapseLocator 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LapseApi
     */
    public getLapseByLocatorUsingGET(lapseLocator: string, options?: any) {
        return LapseApiFp(this.configuration).getLapseByLocatorUsingGET(lapseLocator, options).then((request) => request(this.axios, this.basePath));
    }
}
