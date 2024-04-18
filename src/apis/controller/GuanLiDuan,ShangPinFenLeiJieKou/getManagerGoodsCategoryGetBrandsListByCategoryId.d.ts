import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/category/getBrandsList/{categoryId}
 */
export declare function getManagerGoodsCategoryGetBrandsListByCategoryId(params: GetManagerGoodsCategoryGetBrandsListByCategoryIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        id: string;
        name: string;
    }[];
}>;
export interface GetManagerGoodsCategoryGetBrandsListByCategoryIdParams {
    categoryId: string;
}
