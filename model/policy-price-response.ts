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


import { CommissionResponse } from './commission-response';
import { FeeResponse } from './fee-response';
import { GetExposurePriceResponse } from './get-exposure-price-response';
import { TaxGroupResponse } from './tax-group-response';

/**
 * 
 * @export
 * @interface PolicyPriceResponse
 */
export interface PolicyPriceResponse {
    /**
     * 
     * @type {Array<CommissionResponse>}
     * @memberof PolicyPriceResponse
     */
    commissions: Array<CommissionResponse>;
    /**
     * 
     * @type {Array<GetExposurePriceResponse>}
     * @memberof PolicyPriceResponse
     */
    exposurePrices: Array<GetExposurePriceResponse>;
    /**
     * 
     * @type {Array<FeeResponse>}
     * @memberof PolicyPriceResponse
     */
    fees: Array<FeeResponse>;
    /**
     * 
     * @type {number}
     * @memberof PolicyPriceResponse
     */
    grossCommissions: number;
    /**
     * 
     * @type {string}
     * @memberof PolicyPriceResponse
     */
    grossCommissionsCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof PolicyPriceResponse
     */
    grossFees: number;
    /**
     * 
     * @type {string}
     * @memberof PolicyPriceResponse
     */
    grossFeesCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof PolicyPriceResponse
     */
    grossPremium: number;
    /**
     * 
     * @type {string}
     * @memberof PolicyPriceResponse
     */
    grossPremiumCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof PolicyPriceResponse
     */
    grossTaxes: number;
    /**
     * 
     * @type {string}
     * @memberof PolicyPriceResponse
     */
    grossTaxesCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof PolicyPriceResponse
     */
    grossTechnicalPremium?: number;
    /**
     * 
     * @type {string}
     * @memberof PolicyPriceResponse
     */
    grossTechnicalPremiumCurrency: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PolicyPriceResponse
     */
    premiumsByExposureLocator: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PolicyPriceResponse
     */
    premiumsByPerilLocator: { [key: string]: number; };
    /**
     * 
     * @type {Array<TaxGroupResponse>}
     * @memberof PolicyPriceResponse
     */
    taxGroups: Array<TaxGroupResponse>;
    /**
     * 
     * @type {number}
     * @memberof PolicyPriceResponse
     */
    totalDue: number;
    /**
     * 
     * @type {string}
     * @memberof PolicyPriceResponse
     */
    totalDueCurrency: string;
}


