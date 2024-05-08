import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/brand/get/{id}
 */
export declare function getManagerGoodsBrandGetById(params: GetManagerGoodsBrandGetByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
        logo: string;
        rank: number;
    };
}>;
export interface GetManagerGoodsBrandGetByIdParams {
    id: string;
}
