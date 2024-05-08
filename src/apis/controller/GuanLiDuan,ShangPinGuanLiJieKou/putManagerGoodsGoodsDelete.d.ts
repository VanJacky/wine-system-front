import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goods/delete
 */
export declare function putManagerGoodsGoodsDelete(params: PutManagerGoodsGoodsDeleteParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerGoodsGoodsDeleteParams {
    goodsId: string[];
}
