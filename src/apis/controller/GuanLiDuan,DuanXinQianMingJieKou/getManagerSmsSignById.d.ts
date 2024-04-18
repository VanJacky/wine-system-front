import { type AxiosRequestConfig } from "axios";
/**
 * 查询签名详细
 * /manager/sms/sign/{id}
 */
export declare function getManagerSmsSignById(params: GetManagerSmsSignByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface GetManagerSmsSignByIdParams {
    /** 短信签名id */
    id: string;
}
