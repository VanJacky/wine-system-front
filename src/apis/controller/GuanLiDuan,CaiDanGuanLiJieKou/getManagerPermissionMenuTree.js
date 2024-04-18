import request from "@/utils/require";
/**
 * 获取所有菜单
 * /manager/permission/menu/tree
 */
export function getManagerPermissionMenuTree(config) {
    return request.get(`/manager/permission/menu/tree`, config);
}
