import request from "@/utils/require";
/**
 * 禁/启 用 用户
 * /manager/passport/user/enable/{userId}
 */
export function putManagerPassportUserEnableByUserId(params, config) {
    const paramsInput = {
        status: params.status,
    };
    return request.put(`/manager/passport/user/enable/${params.userId}`, null, {
        params: paramsInput,
        ...config,
    });
}
