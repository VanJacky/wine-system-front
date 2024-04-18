import { type AxiosRequestConfig } from "axios";
import { type PageVo } from "../../interface";
/**
 * /manager/goods/goodsUnit
 */
export declare function getManagerGoodsGoodsUnit(params: GetManagerGoodsGoodsUnitParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        records: {
            name: string;
        }[];
        current: number;
        pages: number;
        size: number;
    };
}>;
export interface GetManagerGoodsGoodsUnitParams {
    pageVO: PageVo;
}
