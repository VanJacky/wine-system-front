import request from "@/utils/require";
/**
 * 注销接口
 * /manager/passport/user/logout
 */
export function postManagerPassportUserLogout(config) {
    return request.post(`/manager/passport/user/logout`, config);
}
