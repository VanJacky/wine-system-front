import request from "@/utils/require";
/**
 * 新增短信模板
 * /manager/sms/template
 */
export function postManagerSmsTemplate(input, config) {
    return request.post(`/manager/sms/template`, input, config);
}
