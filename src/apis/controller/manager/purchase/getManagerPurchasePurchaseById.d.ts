import { type AxiosRequestConfig } from "axios";
/**
 * /manager/purchase/purchase/{id}
 */
export declare function getManagerPurchasePurchaseById(params: GetManagerPurchasePurchaseByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface GetManagerPurchasePurchaseByIdParams {
    /** 采购单ID */
    id: string;
}
