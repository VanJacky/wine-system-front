import request from "@/utils/require";
/**
 * 添加
 * /manager/permission/role
 */
export function postManagerPermissionRole(params, config) {
    const paramsInput = {
        ...params.role,
    };
    return request.post(`/manager/permission/role`, null, {
        params: paramsInput,
        ...config,
    });
}
