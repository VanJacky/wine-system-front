import { type AxiosRequestConfig } from "axios";
/**
 * 删除短信模板
 * /manager/sms/template
 */
export declare function deleteManagerSmsTemplate(params: DeleteManagerSmsTemplateParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerSmsTemplateParams {
    /** 短信模板CODE */
    templateCode: string;
}
