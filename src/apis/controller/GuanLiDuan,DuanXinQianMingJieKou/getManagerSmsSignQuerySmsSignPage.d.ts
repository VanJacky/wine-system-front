import { type AxiosRequestConfig } from "axios";
import { type PageVo } from "../../interface";
/**
 * 查询短信签名分页
 * /manager/sms/sign/querySmsSignPage
 */
export declare function getManagerSmsSignQuerySmsSignPage(params: GetManagerSmsSignQuerySmsSignPageParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        records: {
            signName: string;
            signSource: number;
            remark: string;
            businessLicense: string;
            license: string;
            signStatus: number;
            reason: string;
        }[];
        current: number;
        pages: number;
        size: number;
    };
}>;
export interface GetManagerSmsSignQuerySmsSignPageParams {
    page: PageVo;
    signStatus: number;
}
