import { type AxiosRequestConfig } from "axios";
/**
 * /manager/purchase/purchase/{id}
 */
export declare function putManagerPurchasePurchaseById(params: PutManagerPurchasePurchaseByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface PutManagerPurchasePurchaseByIdParams {
    /** 采购单ID */
    id: string;
}
