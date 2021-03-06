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


import { PolicyholderResponse3 } from './policyholder-response3';

/**
 * 
 * @export
 * @interface Policyholder3PageResponse
 */
export interface Policyholder3PageResponse {
    /**
     * 
     * @type {string}
     * @memberof Policyholder3PageResponse
     */
    pagingToken?: string;
    /**
     * 
     * @type {Array<PolicyholderResponse3>}
     * @memberof Policyholder3PageResponse
     */
    policyholders: Array<PolicyholderResponse3>;
}


