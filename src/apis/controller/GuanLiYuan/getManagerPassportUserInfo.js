import request from "@/utils/require";
/**
 * 获取当前登录用户接口
 * /manager/passport/user/info
 */
export function getManagerPassportUserInfo(config) {
    return request.get(`/manager/passport/user/info`, config);
}
