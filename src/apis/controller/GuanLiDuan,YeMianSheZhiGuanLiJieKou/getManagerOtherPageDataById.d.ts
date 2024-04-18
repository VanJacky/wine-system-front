import { type AxiosRequestConfig } from "axios";
/**
 * 获取页面信息
 * /manager/other/pageData/{id}
 */
export declare function getManagerOtherPageDataById(params: GetManagerOtherPageDataByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface GetManagerOtherPageDataByIdParams {
    id: string;
}
