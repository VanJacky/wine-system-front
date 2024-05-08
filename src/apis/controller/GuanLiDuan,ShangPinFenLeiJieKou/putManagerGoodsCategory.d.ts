import { type AxiosRequestConfig } from "axios";
import { type CategoryVo } from "../../interface";
/**
 * /manager/goods/category
 */
export declare function putManagerGoodsCategory(input?: CategoryVo, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
