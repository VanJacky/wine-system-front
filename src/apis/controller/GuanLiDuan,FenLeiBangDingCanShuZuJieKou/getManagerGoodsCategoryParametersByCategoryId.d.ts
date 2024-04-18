import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/categoryParameters/{categoryId}
 */
export declare function getManagerGoodsCategoryParametersByCategoryId(params: GetManagerGoodsCategoryParametersByCategoryIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        params: {
            paramName: string;
            options: string;
            isIndex: number;
            required: number;
            groupId: string;
        }[];
        groupName: string;
        groupId: string;
    }[];
}>;
export interface GetManagerGoodsCategoryParametersByCategoryIdParams {
    categoryId: string;
}
