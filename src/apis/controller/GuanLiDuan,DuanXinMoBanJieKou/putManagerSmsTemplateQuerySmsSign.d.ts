import { type AxiosRequestConfig } from "axios";
/**
 * 查询短信模板状态
 * /manager/sms/template/querySmsSign
 */
export declare function putManagerSmsTemplateQuerySmsSign(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        templateName: string;
        templateType: number;
        remark: string;
        templateContent: string;
        templateStatus: number;
        templateCode: string;
        reason: string;
    };
}>;
