import request from "@/utils/require";
/**
 * 查询短信模板状态
 * /manager/sms/template/querySmsSign
 */
export function putManagerSmsTemplateQuerySmsSign(config) {
    return request.put(`/manager/sms/template/querySmsSign`, config);
}
