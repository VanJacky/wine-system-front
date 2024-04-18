import { type AxiosRequestConfig } from "axios";
import { type PurchaseOrderSearchParams } from "../../interface";
/**
 * /manager/purchase/purchase
 */
export declare function getManagerPurchasePurchase(params: GetManagerPurchasePurchaseParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface GetManagerPurchasePurchaseParams {
    purchaseOrderSearchParams: PurchaseOrderSearchParams;
}
