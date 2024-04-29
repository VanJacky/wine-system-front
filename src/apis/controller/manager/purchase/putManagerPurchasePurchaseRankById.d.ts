import { type AxiosRequestConfig } from "axios";
/**
 * /manager/purchase/purchase/rank/{id}
 */
export declare function putManagerPurchasePurchaseRankById(params: PutManagerPurchasePurchaseRankByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface PutManagerPurchasePurchaseRankByIdParams {
    /** 采购单ID */
    id: string;
    rankValue: number;
}
