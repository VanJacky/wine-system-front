import request from "@/utils/require";
/**
 * 查询短信签名状态
 * /manager/sms/sign/querySmsSign
 */
export function putManagerSmsSignQuerySmsSign(config) {
    return request.put(`/manager/sms/sign/querySmsSign`, config);
}
