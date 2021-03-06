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
import { FieldGroupCreateRequest } from './field-group-create-request';
import { FieldGroupUpdateRequest } from './field-group-update-request';
import { RenewalExposureUpdateRequest } from './renewal-exposure-update-request';

/**
 * 
 * @export
 * @interface RenewalUpdateRequest
 */
export interface RenewalUpdateRequest {
    /**
     * 
     * @type {Array<ExposureCreateRequest>}
     * @memberof RenewalUpdateRequest
     */
    addExposures?: Array<ExposureCreateRequest>;
    /**
     * 
     * @type {Array<FieldGroupCreateRequest>}
     * @memberof RenewalUpdateRequest
     */
    addFieldGroups?: Array<FieldGroupCreateRequest>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RenewalUpdateRequest
     */
    endExposures?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof RenewalUpdateRequest
     */
    fieldValues?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {Array<string>}
     * @memberof RenewalUpdateRequest
     */
    removeFieldGroups?: Array<string>;
    /**
     * 
     * @type {Array<RenewalExposureUpdateRequest>}
     * @memberof RenewalUpdateRequest
     */
    updateExposures?: Array<RenewalExposureUpdateRequest>;
    /**
     * 
     * @type {Array<FieldGroupUpdateRequest>}
     * @memberof RenewalUpdateRequest
     */
    updateFieldGroups?: Array<FieldGroupUpdateRequest>;
}


