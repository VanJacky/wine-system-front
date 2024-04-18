import { type AxiosRequestConfig } from "axios";
/**
 * 发布页面
 * /manager/other/pageData/release/{id}
 */
export declare function putManagerOtherPageDataReleaseById(params: PutManagerOtherPageDataReleaseByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
        pageData: string;
        pageShow: "OPEN,CLOSE";
        pageType: "INDEX,STORE,SPECIAL";
        pageClientType: "PC,H5,WECHAT_MP,APP";
        num: string;
    };
}>;
export interface PutManagerOtherPageDataReleaseByIdParams {
    id: string;
}
