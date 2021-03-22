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
 * @interface EmailFieldConfiguration
 */
export interface EmailFieldConfiguration {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EmailFieldConfiguration
     */
    condition?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof EmailFieldConfiguration
     */
    heading?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailFieldConfiguration
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmailFieldConfiguration
     */
    newline?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmailFieldConfiguration
     */
    optional?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EmailFieldConfiguration
     */
    order: number;
    /**
     * 
     * @type {string}
     * @memberof EmailFieldConfiguration
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof EmailFieldConfiguration
     */
    width?: number;
}


