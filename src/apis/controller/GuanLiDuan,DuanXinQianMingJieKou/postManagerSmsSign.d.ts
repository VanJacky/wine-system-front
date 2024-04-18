import { type AxiosRequestConfig } from "axios";
import { type SmsSign } from "../../interface";
/**
 * 新增短信签名
 * /manager/sms/sign
 */
export declare function postManagerSmsSign(input?: SmsSign, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        signName: string;
        signSource: number;
        remark: string;
        businessLicense: string;
        license: string;
        signStatus: number;
        reason: string;
    };
}>;
