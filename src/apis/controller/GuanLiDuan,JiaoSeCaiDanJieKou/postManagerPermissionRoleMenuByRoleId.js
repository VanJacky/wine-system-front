import request from "@/utils/require";
/**
 * 保存角色菜单
 * /manager/permission/roleMenu/{roleId}
 */
export function postManagerPermissionRoleMenuByRoleId(params, input, config) {
    return request.post(`/manager/permission/roleMenu/${params.roleId}`, input, config);
}
