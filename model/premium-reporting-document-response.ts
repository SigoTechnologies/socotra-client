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
 * @interface PremiumReportingDocumentResponse
 */
export interface PremiumReportingDocumentResponse {
    /**
     * 
     * @type {string}
     * @memberof PremiumReportingDocumentResponse
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof PremiumReportingDocumentResponse
     */
    fileName: string;
    /**
     * 
     * @type {string}
     * @memberof PremiumReportingDocumentResponse
     */
    locator: string;
    /**
     * 
     * @type {string}
     * @memberof PremiumReportingDocumentResponse
     */
    premiumReportLocator: string;
    /**
     * 
     * @type {string}
     * @memberof PremiumReportingDocumentResponse
     */
    type: PremiumReportingDocumentResponseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PremiumReportingDocumentResponse
     */
    url: string;
}

/**
    * @export
    * @enum {string}
    */
export enum PremiumReportingDocumentResponseTypeEnum {
    Pdf = 'pdf',
    Html = 'html'
}



