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


import { ExposureCreateRequest } from './exposure-create-request';
import { ExposureUpdateRequest } from './exposure-update-request';
import { FieldGroupCreateRequest } from './field-group-create-request';
import { FieldGroupUpdateRequest } from './field-group-update-request';

/**
 * 
 * @export
 * @interface PolicyQuoteUpdateRequest
 */
export interface PolicyQuoteUpdateRequest {
    /**
     * 
     * @type {Array<ExposureCreateRequest>}
     * @memberof PolicyQuoteUpdateRequest
     */
    addExposures?: Array<ExposureCreateRequest>;
    /**
     * 
     * @type {Array<FieldGroupCreateRequest>}
     * @memberof PolicyQuoteUpdateRequest
     */
    addFieldGroups?: Array<FieldGroupCreateRequest>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PolicyQuoteUpdateRequest
     */
    fieldValues?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteUpdateRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyQuoteUpdateRequest
     */
    paymentScheduleName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PolicyQuoteUpdateRequest
     */
    removeExposures?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PolicyQuoteUpdateRequest
     */
    removeFieldGroups?: Array<string>;
    /**
     * 
     * @type {Array<ExposureUpdateRequest>}
     * @memberof PolicyQuoteUpdateRequest
     */
    updateExposures?: Array<ExposureUpdateRequest>;
    /**
     * 
     * @type {Array<FieldGroupUpdateRequest>}
     * @memberof PolicyQuoteUpdateRequest
     */
    updateFieldGroups?: Array<FieldGroupUpdateRequest>;
}

