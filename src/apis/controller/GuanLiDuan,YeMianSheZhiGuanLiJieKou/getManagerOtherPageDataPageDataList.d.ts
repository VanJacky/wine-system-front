import { type AxiosRequestConfig } from "axios";
import { type PageVo, type PageDataDto } from "../../interface";
/**
 * 页面列表
 * /manager/other/pageData/pageDataList
 */
export declare function getManagerOtherPageDataPageDataList(params: GetManagerOtherPageDataPageDataListParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        size: number;
        records: {
            id: string;
            name: string;
            pageShow: "OPEN,CLOSE";
        }[];
        current: number;
        pages: number;
    };
}>;
export interface GetManagerOtherPageDataPageDataListParams {
    pageVO: PageVo;
    pageDataDTO: PageDataDto;
}
