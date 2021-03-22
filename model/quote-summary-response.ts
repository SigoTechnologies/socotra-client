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


import { QuoteSummaryResponseItem } from './quote-summary-response-item';

/**
 * 
 * @export
 * @interface QuoteSummaryResponse
 */
export interface QuoteSummaryResponse {
    /**
     * 
     * @type {Array<QuoteSummaryResponseItem>}
     * @memberof QuoteSummaryResponse
     */
    notDiscarded: Array<QuoteSummaryResponseItem>;
    /**
     * 
     * @type {string}
     * @memberof QuoteSummaryResponse
     */
    selected: string;
}


