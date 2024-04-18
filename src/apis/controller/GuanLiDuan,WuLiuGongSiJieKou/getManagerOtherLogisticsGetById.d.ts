import { type AxiosRequestConfig } from "axios";
/**
 * 通过id获取物流公司
 * /manager/other/logistics/get/{id}
 */
export declare function getManagerOtherLogisticsGetById(params: GetManagerOtherLogisticsGetByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
        code: string;
        standBy: string;
        formItems: string;
        disabled: string;
    };
}>;
export interface GetManagerOtherLogisticsGetByIdParams {
    id: string;
}
