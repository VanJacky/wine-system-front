import { type AxiosRequestConfig } from "axios";
import { type PageVo } from "../../interface";
/**
 * 查询短信模板分页
 * /manager/sms/template/querySmsTemplatePage
 */
export declare function getManagerSmsTemplateQuerySmsTemplatePage(params: GetManagerSmsTemplateQuerySmsTemplatePageParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        size: number;
        records: {
            templateName: string;
            templateType: number;
            remark: string;
            templateContent: string;
            templateStatus: number;
            templateCode: string;
            reason: string;
        }[];
        current: number;
        pages: number;
    };
}>;
export interface GetManagerSmsTemplateQuerySmsTemplatePageParams {
    page: PageVo;
    templateStatus: number;
}
