import request from "@/utils/require";
/**
 * 更新角色菜单
 * /manager/permission/userRole/{userId}
 */
export function putManagerPermissionUserRoleByUserId(params, config) {
    const paramsInput = {
        userRole: params.userRole,
    };
    return request.put(`/manager/permission/userRole/${params.userId}`, null, {
        params: paramsInput,
        ...config,
    });
}
