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


import { Media } from './media';

/**
 * 
 * @export
 * @interface PerilCharacteristicsResponse
 */
export interface PerilCharacteristicsResponse {
    /**
     * 
     * @type {number}
     * @memberof PerilCharacteristicsResponse
     */
    deductible?: number;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    deductibleCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    exposureCharacteristicsLocator: string;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: Array<string>; }; }}
     * @memberof PerilCharacteristicsResponse
     */
    fieldGroupsByLocator: { [key: string]: { [key: string]: Array<string>; }; };
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PerilCharacteristicsResponse
     */
    fieldValues: { [key: string]: Array<string>; };
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    indemnityInAggregate?: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    indemnityInAggregateCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    indemnityPerEvent?: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    indemnityPerEventCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    indemnityPerItem?: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    indemnityPerItemCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    locator: string;
    /**
     * 
     * @type {number}
     * @memberof PerilCharacteristicsResponse
     */
    lumpSumPayment?: number;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    lumpSumPaymentCurrency: string;
    /**
     * 
     * @type {{ [key: string]: Media; }}
     * @memberof PerilCharacteristicsResponse
     */
    mediaByLocator: { [key: string]: Media; };
    /**
     * 
     * @type {number}
     * @memberof PerilCharacteristicsResponse
     */
    monthPremium?: number;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    perilLocator: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    policyCharacteristicsLocator: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    policyholderLocator: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    policyLocator: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    policyModificationLocator: string;
    /**
     * 
     * @type {number}
     * @memberof PerilCharacteristicsResponse
     */
    premium?: number;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    premiumCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof PerilCharacteristicsResponse
     */
    productLocator: string;
    /**
     * 
     * @type {number}
     * @memberof PerilCharacteristicsResponse
     */
    technicalPremium?: number;
}

