import { type AxiosRequestConfig } from "axios";
/**
 * 查询短信签名状态
 * /manager/sms/sign/querySmsSign
 */
export declare function putManagerSmsSignQuerySmsSign(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
