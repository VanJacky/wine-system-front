import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/brand/disable/{brandId}
 */
export declare function putManagerGoodsBrandDisableByBrandId(params: PutManagerGoodsBrandDisableByBrandIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerGoodsBrandDisableByBrandIdParams {
    brandId: string;
    disable: boolean;
}
