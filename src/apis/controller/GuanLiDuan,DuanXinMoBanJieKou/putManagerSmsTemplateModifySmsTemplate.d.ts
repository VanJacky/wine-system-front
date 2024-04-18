import { type AxiosRequestConfig } from "axios";
import { type SmsTemplate } from "../../interface";
/**
 * 修改短信模板
 * /manager/sms/template/modifySmsTemplate
 */
export declare function putManagerSmsTemplateModifySmsTemplate(input?: SmsTemplate, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
