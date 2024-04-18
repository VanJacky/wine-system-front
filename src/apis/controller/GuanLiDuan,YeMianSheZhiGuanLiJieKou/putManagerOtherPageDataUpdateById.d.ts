import { type AxiosRequestConfig } from "axios";
import { type PageData } from "../../interface";
/**
 * 修改页面
 * /manager/other/pageData/update/{id}
 */
export declare function putManagerOtherPageDataUpdateById(params: PutManagerOtherPageDataUpdateByIdParams, input?: PageData, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface PutManagerOtherPageDataUpdateByIdParams {
    id: string;
}
