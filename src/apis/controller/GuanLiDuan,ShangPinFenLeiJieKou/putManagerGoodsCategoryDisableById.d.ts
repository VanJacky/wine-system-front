import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/category/disable/{id}
 */
export declare function putManagerGoodsCategoryDisableById(params: PutManagerGoodsCategoryDisableByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerGoodsCategoryDisableByIdParams {
    id: string;
    enableOperations: boolean;
}
