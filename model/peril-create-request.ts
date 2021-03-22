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


import { FieldGroupCreateRequest } from './field-group-create-request';

/**
 * 
 * @export
 * @interface PerilCreateRequest
 */
export interface PerilCreateRequest {
    /**
     * 
     * @type {number}
     * @memberof PerilCreateRequest
     */
    deductible?: number;
    /**
     * 
     * @type {Array<FieldGroupCreateRequest>}
     * @memberof PerilCreateRequest
     */
    fieldGroups?: Array<FieldGroupCreateRequest>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PerilCreateRequest
     */
    fieldValues?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {string}
     * @memberof PerilCreateRequest
     */
    indemnityInAggregate?: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCreateRequest
     */
    indemnityPerEvent?: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCreateRequest
     */
    indemnityPerItem?: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCreateRequest
     */
    locator?: string;
    /**
     * 
     * @type {number}
     * @memberof PerilCreateRequest
     */
    lumpSumPayment?: number;
    /**
     * 
     * @type {string}
     * @memberof PerilCreateRequest
     */
    name: string;
}


