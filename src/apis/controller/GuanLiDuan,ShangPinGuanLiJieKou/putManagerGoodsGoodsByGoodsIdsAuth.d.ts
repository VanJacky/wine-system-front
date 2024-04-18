import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goods/{goodsIds}/auth
 */
export declare function putManagerGoodsGoodsByGoodsIdsAuth(params: PutManagerGoodsGoodsByGoodsIdsAuthParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerGoodsGoodsByGoodsIdsAuthParams {
    goodsIds: string[];
    authFlag: string;
}
