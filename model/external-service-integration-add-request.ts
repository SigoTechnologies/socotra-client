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
 * @interface ExternalServiceIntegrationAddRequest
 */
export interface ExternalServiceIntegrationAddRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ExternalServiceIntegrationAddRequest
     */
    headers?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ExternalServiceIntegrationAddRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalServiceIntegrationAddRequest
     */
    type?: ExternalServiceIntegrationAddRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ExternalServiceIntegrationAddRequest
     */
    url: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ExternalServiceIntegrationAddRequestTypeEnum {
    ExternalRater = 'external_rater'
}



