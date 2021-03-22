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


import { FieldConfiguration } from './field-configuration';

/**
 * 
 * @export
 * @interface GroupFieldConfiguration
 */
export interface GroupFieldConfiguration {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GroupFieldConfiguration
     */
    condition?: { [key: string]: string; };
    /**
     * 
     * @type {Array<FieldConfiguration>}
     * @memberof GroupFieldConfiguration
     */
    fields: Array<FieldConfiguration>;
    /**
     * 
     * @type {string}
     * @memberof GroupFieldConfiguration
     */
    heading?: string;
    /**
     * 
     * @type {number}
     * @memberof GroupFieldConfiguration
     */
    maximum?: number;
    /**
     * 
     * @type {string}
     * @memberof GroupFieldConfiguration
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof GroupFieldConfiguration
     */
    newline?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GroupFieldConfiguration
     */
    optional?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GroupFieldConfiguration
     */
    order: number;
    /**
     * 
     * @type {boolean}
     * @memberof GroupFieldConfiguration
     */
    repeatable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GroupFieldConfiguration
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof GroupFieldConfiguration
     */
    width?: number;
}


