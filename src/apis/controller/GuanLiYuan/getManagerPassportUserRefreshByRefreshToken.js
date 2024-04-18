import request from "@/utils/require";
/**
 * 刷新token
 * /manager/passport/user/refresh/{refreshToken}
 */
export function getManagerPassportUserRefreshByRefreshToken(params, config) {
    return request.get(`/manager/passport/user/refresh/${params.refreshToken}`, config);
}
