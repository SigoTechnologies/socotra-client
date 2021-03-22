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



/**
 * 
 * @export
 * @interface ReinstatementRequest
 */
export interface ReinstatementRequest {
    /**
     * \"When false this parameter specifies that a reinstatement should be created and left \"+\"in the draft state. When this parameter is true, then the reinstatement will be created, accepted, \"+\"and issued all in one shot. If not specified then the value for this parameter defaults to false.\"
     * @type {boolean}
     * @memberof ReinstatementRequest
     */
    issue?: boolean;
}

