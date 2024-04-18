import request from "@/utils/require";
/**
 * 修改短信模板
 * /manager/sms/template/modifySmsTemplate
 */
export function putManagerSmsTemplateModifySmsTemplate(input, config) {
    return request.put(`/manager/sms/template/modifySmsTemplate`, input, config);
}
