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


import { PolicyDocumentResponse } from './policy-document-response';

/**
 * 
 * @export
 * @interface GracePeriodResponse
 */
export interface GracePeriodResponse {
    /**
     * 
     * @type {string}
     * @memberof GracePeriodResponse
     */
    cancellationLocator?: string;
    /**
     * 
     * @type {PolicyDocumentResponse}
     * @memberof GracePeriodResponse
     */
    document?: PolicyDocumentResponse;
    /**
     * 
     * @type {string}
     * @memberof GracePeriodResponse
     */
    invoiceLocator: string;
    /**
     * 
     * @type {string}
     * @memberof GracePeriodResponse
     */
    locator: string;
    /**
     * 
     * @type {string}
     * @memberof GracePeriodResponse
     */
    policyholderLocator: string;
    /**
     * 
     * @type {string}
     * @memberof GracePeriodResponse
     */
    policyId: string;
    /**
     * 
     * @type {string}
     * @memberof GracePeriodResponse
     */
    policyLocator: string;
    /**
     * 
     * @type {string}
     * @memberof GracePeriodResponse
     */
    productLocator: string;
}

