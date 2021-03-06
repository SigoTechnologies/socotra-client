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


import { SubClaimPayableResponse } from './sub-claim-payable-response';

/**
 * 
 * @export
 * @interface SubClaimPayableListsResponse
 */
export interface SubClaimPayableListsResponse {
    /**
     * 
     * @type {Array<SubClaimPayableResponse>}
     * @memberof SubClaimPayableListsResponse
     */
    expensePayables: Array<SubClaimPayableResponse>;
    /**
     * 
     * @type {Array<SubClaimPayableResponse>}
     * @memberof SubClaimPayableListsResponse
     */
    lossPayables: Array<SubClaimPayableResponse>;
    /**
     * 
     * @type {string}
     * @memberof SubClaimPayableListsResponse
     */
    reserveCurrency: string;
}


