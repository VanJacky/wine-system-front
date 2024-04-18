import request from "@/utils/require";
/**
 * 获取所有菜单--根据当前用户角色
 * /manager/permission/menu/memberMenu
 */
export function getManagerPermissionMenuMemberMenu(config) {
    return request.get(`/manager/permission/menu/memberMenu`, config);
}
