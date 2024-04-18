import request from "@/utils/require";
/**
 * /manager/passport/user/login
 */
export function postManagerPassportUserLogin(params, config) {
    const paramsInput = {
        username: params.username,
        password: params.password,
    };
    return request.post(`/manager/passport/user/login`, null, {
        params: paramsInput,
        ...config,
    });
}
