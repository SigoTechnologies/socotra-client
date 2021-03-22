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
 * @interface HealthTestResponse
 */
export interface HealthTestResponse {
    /**
     * 
     * @type {number}
     * @memberof HealthTestResponse
     */
    duration_millis: number;
    /**
     * 
     * @type {string}
     * @memberof HealthTestResponse
     */
    result: HealthTestResponseResultEnum;
    /**
     * 
     * @type {string}
     * @memberof HealthTestResponse
     */
    tested_at: string;
}

/**
    * @export
    * @enum {string}
    */
export enum HealthTestResponseResultEnum {
    Up = 'up',
    Down = 'down'
}



