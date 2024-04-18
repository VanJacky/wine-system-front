import { type AxiosRequestConfig } from "axios";
/**
 * 更新配置
 * /manager/setting/put/{key}
 */
export declare function putManagerSettingPutByKey(params: PutManagerSettingPutByKeyParams, input: string, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerSettingPutByKeyParams {
    key: string;
}
