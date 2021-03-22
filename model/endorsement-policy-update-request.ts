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
 * @interface EndorsementPolicyUpdateRequest
 */
export interface EndorsementPolicyUpdateRequest {
    /**
     * 
     * @type {Array<ExposureCreateRequest>}
     * @memberof EndorsementPolicyUpdateRequest
     */
    addExposures: Array<ExposureCreateRequest>;
    /**
     * 
     * @type {Array<FieldGroupCreateRequest>}
     * @memberof EndorsementPolicyUpdateRequest
     */
    addFieldGroups: Array<FieldGroupCreateRequest>;
    /**
     * 
     * @type {Array<string>}
     * @memberof EndorsementPolicyUpdateRequest
     */
    endExposures: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EndorsementPolicyUpdateRequest
     */
    fieldValues?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {Array<string>}
     * @memberof EndorsementPolicyUpdateRequest
     */
    removeFieldGroups: Array<string>;
    /**
     * 
     * @type {Array<EndorsementExposureUpdateRequest>}
     * @memberof EndorsementPolicyUpdateRequest
     */
    updateExposures: Array<EndorsementExposureUpdateRequest>;
    /**
     * 
     * @type {Array<FieldGroupUpdateRequest>}
     * @memberof EndorsementPolicyUpdateRequest
     */
    updateFieldGroups: Array<FieldGroupUpdateRequest>;
}


