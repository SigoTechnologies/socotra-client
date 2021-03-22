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
 * @interface LookupFieldConfiguration
 */
export interface LookupFieldConfiguration {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LookupFieldConfiguration
     */
    condition?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof LookupFieldConfiguration
     */
    heading?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof LookupFieldConfiguration
     */
    match?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LookupFieldConfiguration
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof LookupFieldConfiguration
     */
    newline?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LookupFieldConfiguration
     */
    optional?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LookupFieldConfiguration
     */
    order: number;
    /**
     * 
     * @type {boolean}
     * @memberof LookupFieldConfiguration
     */
    _public?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LookupFieldConfiguration
     */
    table: string;
    /**
     * 
     * @type {string}
     * @memberof LookupFieldConfiguration
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof LookupFieldConfiguration
     */
    width?: number;
}

