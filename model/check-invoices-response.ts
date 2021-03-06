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


import { FutureInvoiceResponse } from './future-invoice-response';
import { GeneratedInvoiceResponse } from './generated-invoice-response';

/**
 * 
 * @export
 * @interface CheckInvoicesResponse
 */
export interface CheckInvoicesResponse {
    /**
     * 
     * @type {Array<FutureInvoiceResponse>}
     * @memberof CheckInvoicesResponse
     */
    futureInvoices: Array<FutureInvoiceResponse>;
    /**
     * 
     * @type {Array<GeneratedInvoiceResponse>}
     * @memberof CheckInvoicesResponse
     */
    generatedInvoices: Array<GeneratedInvoiceResponse>;
}


