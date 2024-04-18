import { type AxiosRequestConfig } from "axios";
import { type GoodsUnit } from "../../interface";
/**
 * /manager/goods/goodsUnit/{id}
 */
export declare function putManagerGoodsGoodsUnitById(params: PutManagerGoodsGoodsUnitByIdParams, input?: GoodsUnit, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
    };
}>;
export interface PutManagerGoodsGoodsUnitByIdParams {
    id: string;
}
