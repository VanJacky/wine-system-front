import request from "@/utils/require";
/**
 * 修改密码
 * /manager/passport/user/editPassword
 */
export function putManagerPassportUserEditPassword(params, config) {
    const paramsInput = {
        password: params.password,
        newPassword: params.newPassword,
    };
    return request.put(`/manager/passport/user/editPassword`, null, {
        params: paramsInput,
        ...config,
    });
}
