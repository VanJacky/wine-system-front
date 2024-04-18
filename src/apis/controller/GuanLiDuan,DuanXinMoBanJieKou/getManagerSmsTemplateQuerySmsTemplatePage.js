import request from "@/utils/require";
/**
 * 查询短信模板分页
 * /manager/sms/template/querySmsTemplatePage
 */
export function getManagerSmsTemplateQuerySmsTemplatePage(params, config) {
    const paramsInput = {
        ...params.page,
        templateStatus: params.templateStatus,
    };
    return request.get(`/manager/sms/template/querySmsTemplatePage`, {
        params: paramsInput,
        ...config,
    });
}
