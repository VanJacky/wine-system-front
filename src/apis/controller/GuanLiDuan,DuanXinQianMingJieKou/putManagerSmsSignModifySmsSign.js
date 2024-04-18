import request from "@/utils/require";
/**
 * 修改短信签名
 * /manager/sms/sign/modifySmsSign
 */
export function putManagerSmsSignModifySmsSign(input, config) {
    return request.put(`/manager/sms/sign/modifySmsSign`, input, config);
}
