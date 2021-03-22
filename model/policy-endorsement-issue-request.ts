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


import { EndorsementPolicyUpdateRequest } from './endorsement-policy-update-request';

/**
 * 
 * @export
 * @interface PolicyEndorsementIssueRequest
 */
export interface PolicyEndorsementIssueRequest {
    /**
     * 
     * @type {string}
     * @memberof PolicyEndorsementIssueRequest
     */
    endorsementName: string;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyEndorsementIssueRequest
     */
    reprice?: boolean;
    /**
     * 
     * @type {EndorsementPolicyUpdateRequest}
     * @memberof PolicyEndorsementIssueRequest
     */
    updatePolicy?: EndorsementPolicyUpdateRequest;
}


