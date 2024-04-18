import { type AxiosRequestConfig } from "axios";
/**
 * 查看配置
 * /manager/setting/get/{key}
 */
export declare function getManagerSettingGetByKey(params: GetManagerSettingGetByKeyParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface GetManagerSettingGetByKeyParams {
    key: string;
}
