import { type AxiosRequestConfig } from "axios";
import { type BrandVo } from "../../interface";
/**
 * /manager/goods/brand/{id}
 */
export declare function putManagerGoodsBrandById(params: PutManagerGoodsBrandByIdParams, input?: BrandVo, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface PutManagerGoodsBrandByIdParams {
    id: string;
}
