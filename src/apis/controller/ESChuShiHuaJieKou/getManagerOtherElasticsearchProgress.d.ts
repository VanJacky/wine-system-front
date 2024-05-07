import { type AxiosRequestConfig } from "axios";
/**
 * /manager/other/elasticsearch/progress
 */
export declare function getManagerOtherElasticsearchProgress(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        [x: string]: any;
    };
}>;
