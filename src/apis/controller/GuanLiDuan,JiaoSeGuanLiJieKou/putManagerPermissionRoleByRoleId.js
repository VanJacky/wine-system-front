import request from "@/utils/require";
/**
 * 编辑
 * /manager/permission/role/{roleId}
 */
export function putManagerPermissionRoleByRoleId(params, config) {
    const paramsInput = {
        ...params.role,
    };
    return request.put(`/manager/permission/role/${params.roleId}`, null, {
        params: paramsInput,
        ...config,
    });
}
