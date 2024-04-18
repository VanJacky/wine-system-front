import request from "@/utils/require";
/**
 * 新增短信签名
 * /manager/sms/sign
 */
export function postManagerSmsSign(input, config) {
    return request.post(`/manager/sms/sign`, input, config);
}
