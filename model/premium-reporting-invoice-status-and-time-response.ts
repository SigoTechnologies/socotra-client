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



/**
 * 
 * @export
 * @interface PremiumReportingInvoiceStatusAndTimeResponse
 */
export interface PremiumReportingInvoiceStatusAndTimeResponse {
    /**
     * 
     * @type {string}
     * @memberof PremiumReportingInvoiceStatusAndTimeResponse
     */
    status: PremiumReportingInvoiceStatusAndTimeResponseStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PremiumReportingInvoiceStatusAndTimeResponseStatusEnum {
    Unfulfilled = 'unfulfilled',
    Paid = 'paid',
    WrittenOff = 'writtenOff',
    ZeroDue = 'zeroDue',
    Invalidated = 'invalidated',
    CarriedForward = 'carriedForward'
}



