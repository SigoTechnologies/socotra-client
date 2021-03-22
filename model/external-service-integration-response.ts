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
 * @interface ExternalServiceIntegrationResponse
 */
export interface ExternalServiceIntegrationResponse {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ExternalServiceIntegrationResponse
     */
    headers: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ExternalServiceIntegrationResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalServiceIntegrationResponse
     */
    tenantLocator: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalServiceIntegrationResponse
     */
    type: ExternalServiceIntegrationResponseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ExternalServiceIntegrationResponse
     */
    url: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ExternalServiceIntegrationResponseTypeEnum {
    ExternalRater = 'external_rater'
}



