import { type AxiosRequestConfig } from "axios";
import { type CategoryParameterGroup } from "../../interface";
/**
 * /manager/goods/categoryParameters
 */
export declare function postManagerGoodsCategoryParameters(input?: CategoryParameterGroup, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        groupName: string;
        categoryId: string;
    };
}>;
