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
 * @interface SsoFindByHostnameRequest
 */
export interface SsoFindByHostnameRequest {
    /**
     * 
     * @type {string}
     * @memberof SsoFindByHostnameRequest
     */
    cursor?: string;
    /**
     * 
     * @type {string}
     * @memberof SsoFindByHostnameRequest
     */
    hostName: string;
    /**
     * 
     * @type {number}
     * @memberof SsoFindByHostnameRequest
     */
    limit?: number;
}


