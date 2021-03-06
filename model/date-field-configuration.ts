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


import { DateOffsetConfiguration } from './date-offset-configuration';

/**
 * 
 * @export
 * @interface DateFieldConfiguration
 */
export interface DateFieldConfiguration {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DateFieldConfiguration
     */
    condition?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof DateFieldConfiguration
     */
    heading?: string;
    /**
     * 
     * @type {string}
     * @memberof DateFieldConfiguration
     */
    maximum?: string;
    /**
     * 
     * @type {DateOffsetConfiguration}
     * @memberof DateFieldConfiguration
     */
    maximumOffset?: DateOffsetConfiguration;
    /**
     * 
     * @type {string}
     * @memberof DateFieldConfiguration
     */
    minimum?: string;
    /**
     * 
     * @type {DateOffsetConfiguration}
     * @memberof DateFieldConfiguration
     */
    minimumOffset?: DateOffsetConfiguration;
    /**
     * 
     * @type {string}
     * @memberof DateFieldConfiguration
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof DateFieldConfiguration
     */
    newline?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DateFieldConfiguration
     */
    optional?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DateFieldConfiguration
     */
    order: number;
    /**
     * 
     * @type {string}
     * @memberof DateFieldConfiguration
     */
    precision: DateFieldConfigurationPrecisionEnum;
    /**
     * 
     * @type {boolean}
     * @memberof DateFieldConfiguration
     */
    showCalendar?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DateFieldConfiguration
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof DateFieldConfiguration
     */
    width?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum DateFieldConfigurationPrecisionEnum {
    Year = 'year',
    Month = 'month',
    Day = 'day',
    Second = 'second'
}



