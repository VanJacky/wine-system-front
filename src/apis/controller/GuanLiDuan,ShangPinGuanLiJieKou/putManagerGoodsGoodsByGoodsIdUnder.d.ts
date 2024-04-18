import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goods/{goodsId}/under
 */
export declare function putManagerGoodsGoodsByGoodsIdUnder(params: PutManagerGoodsGoodsByGoodsIdUnderParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerGoodsGoodsByGoodsIdUnderParams {
    goodsId: string;
    reason: string;
}
