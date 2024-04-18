import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goodsUnit/get/{id}
 */
export declare function getManagerGoodsGoodsUnitGetById(params: GetManagerGoodsGoodsUnitGetByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
    };
}>;
export interface GetManagerGoodsGoodsUnitGetByIdParams {
    id: string;
}
