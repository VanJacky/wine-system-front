import { type AxiosRequestConfig } from "axios";
import { type BrandPageDto } from "../../interface";
/**
 * /manager/goods/brand/getByPage
 */
export declare function getManagerGoodsBrandGetByPage(params: GetManagerGoodsBrandGetByPageParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        size: number;
        records: {
            name: string;
            logo: string;
            sort: number;
        }[];
        current: number;
        pages: number;
    };
}>;
export interface GetManagerGoodsBrandGetByPageParams {
    page: BrandPageDto;
}
