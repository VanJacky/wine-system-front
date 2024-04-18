import { type AxiosRequestConfig } from "axios";
import { type BrandVo } from "../../interface";
/**
 * /manager/goods/brand
 */
export declare function postManagerGoodsBrand(input?: BrandVo, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
        logo: string;
        sort: number;
    };
}>;
