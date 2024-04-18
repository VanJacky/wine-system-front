import request from "@/utils/require";
/**
 * 查询签名详细
 * /manager/sms/sign/{id}
 */
export function getManagerSmsSignById(params, config) {
    return request.get(`/manager/sms/sign/${params.id}`, config);
}
