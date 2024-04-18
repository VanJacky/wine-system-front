import { type AxiosRequestConfig } from "axios";
import { type SmsTemplate } from "../../interface";
/**
 * 新增短信模板
 * /manager/sms/template
 */
export declare function postManagerSmsTemplate(input?: SmsTemplate, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
