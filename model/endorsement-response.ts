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
import { EndorsementExposureUpdateRequest } from './endorsement-exposure-update-request';
import { ExposureCreateRequest } from './exposure-create-request';
import { FieldGroupCreateRequest } from './field-group-create-request';
import { FieldGroupUpdateRequest } from './field-group-update-request';
import { FutureInvoiceResponse } from './future-invoice-response';
import { PolicyDocumentResponse } from './policy-document-response';
import { PolicyInvoice2Response } from './policy-invoice2-response';
import { PolicyPriceChangeResponse } from './policy-price-change-response';

/**
 * 
 * @export
 * @interface EndorsementResponse
 */
export interface EndorsementResponse {
    /**
     * 
     * @type {Array<ExposureCreateRequest>}
     * @memberof EndorsementResponse
     */
    addExposures: Array<ExposureCreateRequest>;
    /**
     * 
     * @type {Array<FieldGroupCreateRequest>}
     * @memberof EndorsementResponse
     */
    addFieldGroups: Array<FieldGroupCreateRequest>;
    /**
     * 
     * @type {AutomatedUnderwritingResultResponse}
     * @memberof EndorsementResponse
     */
    automatedUnderwritingResult?: AutomatedUnderwritingResultResponse;
    /**
     * 
     * @type {Array<PolicyDocumentResponse>}
     * @memberof EndorsementResponse
     */
    documents: Array<PolicyDocumentResponse>;
    /**
     * 
     * @type {Array<string>}
     * @memberof EndorsementResponse
     */
    endExposures: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EndorsementResponse
     */
    endorsementName: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EndorsementResponse
     */
    fieldValues: { [key: string]: Array<string>; };
    /**
     * 
     * @type {PolicyInvoice2Response}
     * @memberof EndorsementResponse
     */
    invoice?: PolicyInvoice2Response;
    /**
     * 
     * @type {string}
     * @memberof EndorsementResponse
     */
    locator: string;
    /**
     * 
     * @type {Array<FutureInvoiceResponse>}
     * @memberof EndorsementResponse
     */
    plannedInvoices?: Array<FutureInvoiceResponse>;
    /**
     * 
     * @type {string}
     * @memberof EndorsementResponse
     */
    policyholderLocator: string;
    /**
     * 
     * @type {string}
     * @memberof EndorsementResponse
     */
    policyLocator: string;
    /**
     * 
     * @type {PolicyPriceChangeResponse}
     * @memberof EndorsementResponse
     */
    price?: PolicyPriceChangeResponse;
    /**
     * 
     * @type {string}
     * @memberof EndorsementResponse
     */
    productLocator: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EndorsementResponse
     */
    removeFieldGroups: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof EndorsementResponse
     */
    reprice: boolean;
    /**
     * 
     * @type {string}
     * @memberof EndorsementResponse
     */
    state: EndorsementResponseStateEnum;
    /**
     * 
     * @type {Array<EndorsementExposureUpdateRequest>}
     * @memberof EndorsementResponse
     */
    updateExposures: Array<EndorsementExposureUpdateRequest>;
    /**
     * 
     * @type {Array<FieldGroupUpdateRequest>}
     * @memberof EndorsementResponse
     */
    updateFieldGroups: Array<FieldGroupUpdateRequest>;
}

/**
    * @export
    * @enum {string}
    */
export enum EndorsementResponseStateEnum {
    Application = 'application',
    Quoted = 'quoted',
    Accepted = 'accepted',
    Issued = 'issued',
    Invalidated = 'invalidated',
    Discarded = 'discarded'
}



