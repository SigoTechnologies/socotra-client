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
 * @interface ValidationFieldError2
 */
export interface ValidationFieldError2 {
    /**
     * 
     * @type {string}
     * @memberof ValidationFieldError2
     */
    code: ValidationFieldError2CodeEnum;
    /**
     * 
     * @type {string}
     * @memberof ValidationFieldError2
     */
    fieldName: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationFieldError2
     */
    message?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ValidationFieldError2CodeEnum {
    Missing = 'MISSING',
    InvalidField = 'INVALID_FIELD',
    InvalidType = 'INVALID_TYPE',
    InvalidValue = 'INVALID_VALUE'
}


