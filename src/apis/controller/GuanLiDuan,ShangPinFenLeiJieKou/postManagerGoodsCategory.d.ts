import { type AxiosRequestConfig } from "axios";
import { type Category } from "../../interface";
/**
 * /manager/goods/category
 */
export declare function postManagerGoodsCategory(input?: Category, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
    };
}>;
