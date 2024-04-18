import request from "@/utils/require";
/**
 * 修改用户自己资料
 * /manager/passport/user/edit
 */
export function putManagerPassportUserEdit(params, config) {
    const paramsInput = {
        ...params.adminUser,
    };
    return request.put(`/manager/passport/user/edit`, null, {
        params: paramsInput,
        ...config,
    });
}
