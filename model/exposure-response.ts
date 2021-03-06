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


import { ExposureCharacteristicsResponse } from './exposure-characteristics-response';
import { PerilResponse } from './peril-response';

/**
 * 
 * @export
 * @interface ExposureResponse
 */
export interface ExposureResponse {
    /**
     * 
     * @type {Array<ExposureCharacteristicsResponse>}
     * @memberof ExposureResponse
     */
    characteristics: Array<ExposureCharacteristicsResponse>;
    /**
     * 
     * @type {string}
     * @memberof ExposureResponse
     */
    displayId: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureResponse
     */
    locator: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureResponse
     */
    name: string;
    /**
     * 
     * @type {Array<PerilResponse>}
     * @memberof ExposureResponse
     */
    perils: Array<PerilResponse>;
    /**
     * 
     * @type {string}
     * @memberof ExposureResponse
     */
    policyholderLocator: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureResponse
     */
    policyLocator: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureResponse
     */
    productLocator: string;
}


