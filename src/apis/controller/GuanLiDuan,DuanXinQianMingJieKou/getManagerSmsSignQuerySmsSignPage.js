import request from "@/utils/require";
/**
 * 查询短信签名分页
 * /manager/sms/sign/querySmsSignPage
 */
export function getManagerSmsSignQuerySmsSignPage(params, config) {
    const paramsInput = {
        ...params.page,
        signStatus: params.signStatus,
    };
    return request.get(`/manager/sms/sign/querySmsSignPage`, {
        params: paramsInput,
        ...config,
    });
}
