import { type AxiosRequestConfig } from "axios";
import { type Parameters } from "../../interface";
/**
 * /manager/goods/parameters
 */
export declare function putManagerGoodsParameters(input?: Parameters, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        paramName: string;
        options: string;
        isIndex: number;
        required: number;
        groupId: string;
    };
}>;
