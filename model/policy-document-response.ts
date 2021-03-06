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
 * @interface PolicyDocumentResponse
 */
export interface PolicyDocumentResponse {
    /**
     * 
     * @type {string}
     * @memberof PolicyDocumentResponse
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyDocumentResponse
     */
    fileName: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyDocumentResponse
     */
    locator: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyDocumentResponse
     */
    policyModificationLocator?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyDocumentResponse
     */
    type: PolicyDocumentResponseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PolicyDocumentResponse
     */
    url: string;
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyDocumentResponseTypeEnum {
    Pdf = 'pdf',
    Html = 'html'
}



