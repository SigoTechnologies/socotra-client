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


import { AccountResponse } from './account-response';

/**
 * 
 * @export
 * @interface AccountPagedResultResponse
 */
export interface AccountPagedResultResponse {
    /**
     * 
     * @type {string}
     * @memberof AccountPagedResultResponse
     */
    cursor?: string;
    /**
     * 
     * @type {Array<AccountResponse>}
     * @memberof AccountPagedResultResponse
     */
    resultsPage: Array<AccountResponse>;
}


