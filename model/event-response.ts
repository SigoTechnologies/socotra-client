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
 * @interface EventResponse
 */
export interface EventResponse {
    /**
     * 
     * @type {object}
     * @memberof EventResponse
     */
    data: object;
    /**
     * 
     * @type {string}
     * @memberof EventResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EventResponse
     */
    type: EventResponseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EventResponse
     */
    username?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum EventResponseTypeEnum {
    CancellationCreate = 'cancellation.create',
    CancellationUpdate = 'cancellation.update',
    CancellationRescind = 'cancellation.rescind',
    CancellationIssue = 'cancellation.issue',
    ClaimClose = 'claim.close',
    ClaimCreate = 'claim.create',
    ClaimDiscard = 'claim.discard',
    ClaimOpen = 'claim.open',
    ClaimUpdate = 'claim.update',
    PolicyGracePeriod = 'policy.gracePeriod',
    PolicyGracePeriodUpdate = 'policy.gracePeriod.update',
    InvoiceIssue = 'invoice.issue',
    PaymentPay = 'payment.pay',
    PolicyCancel = 'policy.cancel',
    PolicyCreate = 'policy.create',
    PolicyDiscard = 'policy.discard',
    PolicyEndorse = 'policy.endorse',
    PolicyFinalize = 'policy.finalize',
    PolicyInvoice = 'policy.invoice',
    PolicyIssue = 'policy.issue',
    PolicyLapse = 'policy.lapse',
    PolicyReinstatementClose = 'policy.reinstatement.close',
    PolicyReinstatementInvoice = 'policy.reinstatement.invoice',
    PolicyReinstatementIssue = 'policy.reinstatement.issue',
    PolicyReinstatementOpen = 'policy.reinstatement.open',
    PolicyRenew = 'policy.renew',
    PolicyUpdate = 'policy.update',
    SubClaimOpen = 'subClaim.open',
    SubClaimUpdate = 'subClaim.update',
    SubClaimClose = 'subClaim.close',
    SubClaimReopen = 'subClaim.reopen',
    SubClaimUpdateReserve = 'subClaim.updateReserve',
    PolicyEndReminder = 'policy.end.reminder',
    SubClaimCreatePayable = 'subClaim.createPayable',
    SubClaimReversePayable = 'subClaim.reversePayable',
    EndorsementCreate = 'endorsement.create',
    EndorsementUpdate = 'endorsement.update',
    EndorsementQuote = 'endorsement.quote',
    EndorsementAccept = 'endorsement.accept',
    EndorsementIssue = 'endorsement.issue',
    EndorsementInvalidate = 'endorsement.invalidate',
    EndorsementDiscard = 'endorsement.discard',
    ReinstatementAccept = 'reinstatement.accept',
    ReinstatementCreate = 'reinstatement.create',
    ReinstatementIssue = 'reinstatement.issue',
    ReinstatementInvalidate = 'reinstatement.invalidate',
    ReinstatementDeadlineReached = 'reinstatement.deadlineReached',
    RenewalCreate = 'renewal.create',
    RenewalUpdate = 'renewal.update',
    RenewalQuote = 'renewal.quote',
    RenewalAccept = 'renewal.accept',
    RenewalIssue = 'renewal.issue',
    RenewalInvalidate = 'renewal.invalidate',
    RenewalDiscard = 'renewal.discard',
    PolicyEnd = 'policy.end',
    PolicyQuoteCreate = 'policy.quote.create',
    PolicyQuoteDiscard = 'policy.quote.discard',
    PolicyQuoteUpdate = 'policy.quote.update',
    PolicyQuoteQuoted = 'policy.quote.quoted',
    PolicyQuoteAccept = 'policy.quote.accept',
    PolicyQuoteDeclined = 'policy.quote.declined',
    PremiumReportCreate = 'premiumReport.create',
    PremiumReportUpdate = 'premiumReport.update',
    PremiumReportIssue = 'premiumReport.issue',
    PremiumReportDiscard = 'premiumReport.discard',
    LoginSuccess = 'login.success',
    LoginFailure = 'login.failure',
    PolicyholderCreate = 'policyholder.create',
    PolicyholderUpdate = 'policyholder.update',
    PaymentReverse = 'payment.reverse'
}


