import request from "@/utils/require";
/**
 * 删除短信模板
 * /manager/sms/template
 */
export function deleteManagerSmsTemplate(params, config) {
    const paramsInput = {
        templateCode: params.templateCode,
    };
    return request.delete(`/manager/sms/template`, {
        params: paramsInput,
        ...config,
    });
}
