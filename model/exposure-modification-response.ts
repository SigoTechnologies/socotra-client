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


import { PerilModificationResponse } from './peril-modification-response';

/**
 * 
 * @export
 * @interface ExposureModificationResponse
 */
export interface ExposureModificationResponse {
    /**
     * 
     * @type {string}
     * @memberof ExposureModificationResponse
     */
    exposureLocator: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureModificationResponse
     */
    locator: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureModificationResponse
     */
    newExposureCharacteristicsLocator?: string;
    /**
     * 
     * @type {Array<PerilModificationResponse>}
     * @memberof ExposureModificationResponse
     */
    perilModifications: Array<PerilModificationResponse>;
    /**
     * 
     * @type {string}
     * @memberof ExposureModificationResponse
     */
    policyholderLocator: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureModificationResponse
     */
    policyLocator: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureModificationResponse
     */
    policyModificationLocator: string;
    /**
     * 
     * @type {string}
     * @memberof ExposureModificationResponse
     */
    productLocator: string;
}


