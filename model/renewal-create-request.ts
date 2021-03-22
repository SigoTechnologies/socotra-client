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
 * @interface RenewalCreateRequest
 */
export interface RenewalCreateRequest {
    /**
     * 
     * @type {Array<ExposureCreateRequest>}
     * @memberof RenewalCreateRequest
     */
    addExposures?: Array<ExposureCreateRequest>;
    /**
     * 
     * @type {Array<FieldGroupCreateRequest>}
     * @memberof RenewalCreateRequest
     */
    addFieldGroups?: Array<FieldGroupCreateRequest>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RenewalCreateRequest
     */
    endExposures?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof RenewalCreateRequest
     */
    fieldValues?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {Array<string>}
     * @memberof RenewalCreateRequest
     */
    removeFieldGroups?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RenewalCreateRequest
     */
    state?: RenewalCreateRequestStateEnum;
    /**
     * 
     * @type {Array<RenewalExposureUpdateRequest>}
     * @memberof RenewalCreateRequest
     */
    updateExposures?: Array<RenewalExposureUpdateRequest>;
    /**
     * 
     * @type {Array<FieldGroupUpdateRequest>}
     * @memberof RenewalCreateRequest
     */
    updateFieldGroups?: Array<FieldGroupUpdateRequest>;
}

/**
    * @export
    * @enum {string}
    */
export enum RenewalCreateRequestStateEnum {
    Application = 'application',
    Quoted = 'quoted',
    Accepted = 'accepted',
    Issued = 'issued'
}



