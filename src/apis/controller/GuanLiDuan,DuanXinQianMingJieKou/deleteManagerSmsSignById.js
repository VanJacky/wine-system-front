import request from "@/utils/require";
/**
 * 删除短信签名
 * /manager/sms/sign/{id}
 */
export function deleteManagerSmsSignById(params, config) {
    return request.delete(`/manager/sms/sign/${params.id}`, config);
}
