import { type AxiosRequestConfig } from "axios";
import { type SearchVo, type PageVo } from "../../interface";
/**
 * 分页获取全部
 * /manager/setting/log/getAllByPage
 */
export declare function getManagerSettingLogGetAllByPage(params: GetManagerSettingLogGetAllByPageParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface GetManagerSettingLogGetAllByPageParams {
    type?: number;
    searchKey: string;
    operatorName: string;
    searchVo: SearchVo;
    pageVo: PageVo;
}
