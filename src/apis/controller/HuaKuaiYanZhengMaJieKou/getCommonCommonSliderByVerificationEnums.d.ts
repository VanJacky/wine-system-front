import { type AxiosRequestConfig } from "axios";
/**
 * 获取校验接口,一分钟同一个ip请求10次
 * /common/common/slider/{verificationEnums}
 */
export declare function getCommonCommonSliderByVerificationEnums(params: GetCommonCommonSliderByVerificationEnumsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface GetCommonCommonSliderByVerificationEnumsParams {
    verificationEnums: 'LOGIN' | 'REGISTER' | 'FIND_USER' | 'UPDATE_PASSWORD' | 'WALLET_PASSWORD';
}
