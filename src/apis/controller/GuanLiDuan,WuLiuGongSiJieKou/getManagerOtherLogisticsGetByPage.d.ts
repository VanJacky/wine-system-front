import { type AxiosRequestConfig } from "axios";
import { type PageVo } from "../../interface";
/**
 * 分页获取物流公司
 * /manager/other/logistics/getByPage
 */
export declare function getManagerOtherLogisticsGetByPage(params: GetManagerOtherLogisticsGetByPageParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        records: {
            name: string;
            code: string;
            standBy: string;
            formItems: string;
            disabled: string;
        }[];
        current: number;
        pages: number;
        size: number;
    };
}>;
export interface GetManagerOtherLogisticsGetByPageParams {
    page: PageVo;
}
