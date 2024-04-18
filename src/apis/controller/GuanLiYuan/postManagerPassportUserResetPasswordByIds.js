import request from "@/utils/require";
/**
 * 重置密码
 * /manager/passport/user/resetPassword/{ids}
 */
export function postManagerPassportUserResetPasswordByIds(params, config) {
    return request.post(`/manager/passport/user/resetPassword/${params.ids}`, config);
}
