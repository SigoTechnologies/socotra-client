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
 * @interface SsoAddInternalAccountRequest
 */
export interface SsoAddInternalAccountRequest {
    /**
     * 
     * @type {string}
     * @memberof SsoAddInternalAccountRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof SsoAddInternalAccountRequest
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof SsoAddInternalAccountRequest
     */
    hostName?: string;
    /**
     * 
     * @type {string}
     * @memberof SsoAddInternalAccountRequest
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof SsoAddInternalAccountRequest
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof SsoAddInternalAccountRequest
     */
    username: string;
}

