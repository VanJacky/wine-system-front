import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/brand/all
 */
export declare function getManagerGoodsBrandAll(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    name: string;
    logo: string;
    sort: number;
}[]>;
