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


import { SubEntityCreateRequest } from './sub-entity-create-request';
import { SubEntityUpdateRequest } from './sub-entity-update-request';

/**
 * 
 * @export
 * @interface PolicyholderUpdateRequest2
 */
export interface PolicyholderUpdateRequest2 {
    /**
     * 
     * @type {Array<SubEntityCreateRequest>}
     * @memberof PolicyholderUpdateRequest2
     */
    addSubEntities?: Array<SubEntityCreateRequest>;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyholderUpdateRequest2
     */
    completed: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof PolicyholderUpdateRequest2
     */
    deleteSubEntities?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PolicyholderUpdateRequest2
     */
    locator: string;
    /**
     * 
     * @type {Array<SubEntityUpdateRequest>}
     * @memberof PolicyholderUpdateRequest2
     */
    updateSubEntities?: Array<SubEntityUpdateRequest>;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PolicyholderUpdateRequest2
     */
    values?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {number}
     * @memberof PolicyholderUpdateRequest2
     */
    version: number;
}


