import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/category/allChildren
 */
export declare function getManagerGoodsCategoryAllChildren(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
        parentTitle: string;
        children: any[];
        brandList: {
            id: string;
            name: string;
        }[];
    }[];
}>;
