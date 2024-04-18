import { type AxiosRequestConfig } from "axios";
import { type SmsSign } from "../../interface";
/**
 * 修改短信签名
 * /manager/sms/sign/modifySmsSign
 */
export declare function putManagerSmsSignModifySmsSign(input?: SmsSign, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
