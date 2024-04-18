import request from "@/utils/require";
/**
 * 超级管理员修改其他管理员资料
 * /manager/passport/user/admin/edit
 */
export function putManagerPassportUserAdminEdit(params, input, config) {
    const paramsInput = {
        roles: params.roles,
    };
    return request.put(`/manager/passport/user/admin/edit`, input, {
        params: paramsInput,
        ...config,
    });
}
