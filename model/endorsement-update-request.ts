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


import { EndorsementExposureUpdateRequest } from './endorsement-exposure-update-request';
import { ExposureCreateRequest } from './exposure-create-request';
import { FieldGroupCreateRequest } from './field-group-create-request';
import { FieldGroupUpdateRequest } from './field-group-update-request';

/**
 * 
 * @export
 * @interface EndorsementUpdateRequest
 */
export interface EndorsementUpdateRequest {
    /**
     * 
     * @type {Array<ExposureCreateRequest>}
     * @memberof EndorsementUpdateRequest
     */
    addExposures?: Array<ExposureCreateRequest>;
    /**
     * 
     * @type {Array<FieldGroupCreateRequest>}
     * @memberof EndorsementUpdateRequest
     */
    addFieldGroups?: Array<FieldGroupCreateRequest>;
    /**
     * 
     * @type {Array<string>}
     * @memberof EndorsementUpdateRequest
     */
    endExposures?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EndorsementUpdateRequest
     */
    fieldValues?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {Array<string>}
     * @memberof EndorsementUpdateRequest
     */
    removeFieldGroups?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof EndorsementUpdateRequest
     */
    reprice?: boolean;
    /**
     * 
     * @type {Array<EndorsementExposureUpdateRequest>}
     * @memberof EndorsementUpdateRequest
     */
    updateExposures?: Array<EndorsementExposureUpdateRequest>;
    /**
     * 
     * @type {Array<FieldGroupUpdateRequest>}
     * @memberof EndorsementUpdateRequest
     */
    updateFieldGroups?: Array<FieldGroupUpdateRequest>;
}


