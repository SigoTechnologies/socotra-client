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
import { ProductConfiguration2Response } from '../model';
/**
 * ProductApi - axios parameter creator
 * @export
 */
export const ProductApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary getProductsUsingGET
         * @param {number} configVersion 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsUsingGET: async (configVersion: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'configVersion' is not null or undefined
            assertParamExists('getProductsUsingGET', 'configVersion', configVersion)
            const localVarPath = `/products/["/{configVersion}" | ""]`
                .replace(`{${"configVersion"}}`, encodeURIComponent(String(configVersion)));
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
 * ProductApi - functional programming interface
 * @export
 */
export const ProductApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary getProductsUsingGET
         * @param {number} configVersion 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductsUsingGET(configVersion: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProductConfiguration2Response>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductsUsingGET(configVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductApi - factory interface
 * @export
 */
export const ProductApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductApiFp(configuration)
    return {
        /**
         * 
         * @summary getProductsUsingGET
         * @param {number} configVersion 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductsUsingGET(configVersion: number, options?: any): AxiosPromise<Array<ProductConfiguration2Response>> {
            return localVarFp.getProductsUsingGET(configVersion, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductApi - object-oriented interface
 * @export
 * @class ProductApi
 * @extends {BaseAPI}
 */
export class ProductApi extends BaseAPI {
    /**
     * 
     * @summary getProductsUsingGET
     * @param {number} configVersion 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductApi
     */
    public getProductsUsingGET(configVersion: number, options?: any) {
        return ProductApiFp(this.configuration).getProductsUsingGET(configVersion, options).then((request) => request(this.axios, this.basePath));
    }
}
