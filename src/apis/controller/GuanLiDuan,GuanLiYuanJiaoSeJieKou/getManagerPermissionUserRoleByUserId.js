import request from "@/utils/require";
/**
 * 查看管理员角色
 * /manager/permission/userRole/{userId}
 */
export function getManagerPermissionUserRoleByUserId(params, config) {
    return request.get(`/manager/permission/userRole/${params.userId}`, config);
}
