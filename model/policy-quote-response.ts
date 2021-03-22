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


import { AutomatedUnderwritingResultResponse } from './automated-underwriting-result-response';
import { ExposureResponse } from './exposure-response';
import { FeeResponse } from './fee-response';
import { PolicyCharacteristicsResponse } from './policy-characteristics-response';
import { PolicyDocumentResponse } from './policy-document-response';
import { PolicyQuoteInvoiceResponse } from './policy-quote-invoice-response';

/**
 * 
 * @export
 * @interface PolicyQuoteResponse
 */
export interface PolicyQuoteResponse {
    /**
     * 
     * @type {AutomatedUnderwritingResultResponse}
     * @memberof PolicyQuoteResponse
     */
    automatedUnderwritingResult?: AutomatedUnderwritingResultResponse;
    /**
     * 
     * @type {PolicyCharacteristicsResponse}
     * @memberof PolicyQuoteResponse
     */
    characteristics: PolicyCharacteristicsResponse;
    /**
     * 
     * @type {Array<PolicyDocumentResponse>}
     * @memberof PolicyQuoteResponse
     */
    documents: Array<PolicyDocumentResponse>;
    /**
     * 
     * @type {Array<ExposureResponse>}
     * @memberof PolicyQuoteResponse
     */
    exposures: Array<ExposureResponse>;
    /**
     * 
     * @type {Array<FeeResponse>}
     * @memberof PolicyQuoteResponse
     */
    fees: Array<FeeResponse>;
    /**
     * 
     * @type {number}
     * @memberof PolicyQuoteResponse
     */
    grossFees?: number;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    grossFeesCurrency?: string;
    /**
     * 
     * @type {Array<PolicyQuoteInvoiceResponse>}
     * @memberof PolicyQuoteResponse
     */
    invoices: Array<PolicyQuoteInvoiceResponse>;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    locator: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    paymentScheduleName?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    policyholderLocator: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    policyLocator: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    productLocator: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    productName: string;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyQuoteResponse
     */
    selected: boolean;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteResponse
     */
    state: PolicyQuoteResponseStateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyQuoteResponseStateEnum {
    Draft = 'draft',
    Quoted = 'quoted',
    Accepted = 'accepted',
    Declined = 'declined',
    Discarded = 'discarded'
}


