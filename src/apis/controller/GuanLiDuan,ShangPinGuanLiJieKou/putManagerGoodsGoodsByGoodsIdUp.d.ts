import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goods/{goodsId}/up
 */
export declare function putManagerGoodsGoodsByGoodsIdUp(params: PutManagerGoodsGoodsByGoodsIdUpParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerGoodsGoodsByGoodsIdUpParams {
    goodsId: string[];
}
