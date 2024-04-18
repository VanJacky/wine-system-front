import request from "@/utils/require";
/**
 * 添加用户
 * /manager/passport/user
 */
export function postManagerPassportUser(params, input, config) {
    const paramsInput = {
        roles: params.roles,
    };
    return request.post(`/manager/passport/user`, input, {
        params: paramsInput,
        ...config,
    });
}
