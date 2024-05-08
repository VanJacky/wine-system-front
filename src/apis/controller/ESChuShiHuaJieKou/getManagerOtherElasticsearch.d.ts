import { type AxiosRequestConfig } from "axios";
/**
 * /manager/other/elasticsearch
 */
export declare function getManagerOtherElasticsearch(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: string;
}>;
