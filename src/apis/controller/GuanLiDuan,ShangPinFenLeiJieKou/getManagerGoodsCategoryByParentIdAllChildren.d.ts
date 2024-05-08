import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/category/{parentId}/all-children
 */
export declare function getManagerGoodsCategoryByParentIdAllChildren(params: GetManagerGoodsCategoryByParentIdAllChildrenParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
        parentId: string;
        level: number;
        rank: number;
        commissionRate: number;
        image: string;
        supportChannel: boolean;
    }[];
}>;
export interface GetManagerGoodsCategoryByParentIdAllChildrenParams {
    parentId: string;
}
