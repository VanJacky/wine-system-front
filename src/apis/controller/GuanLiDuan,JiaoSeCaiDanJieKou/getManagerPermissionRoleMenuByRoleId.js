import request from "@/utils/require";
/**
 * 查看某角色拥有到菜单
 * /manager/permission/roleMenu/{roleId}
 */
export function getManagerPermissionRoleMenuByRoleId(params, config) {
    return request.get(`/manager/permission/roleMenu/${params.roleId}`, config);
}
