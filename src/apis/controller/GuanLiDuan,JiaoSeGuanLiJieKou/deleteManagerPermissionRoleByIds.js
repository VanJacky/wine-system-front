import request from "@/utils/require";
/**
 * 批量删除
 * /manager/permission/role/{ids}
 */
export function deleteManagerPermissionRoleByIds(params, config) {
    return request.delete(`/manager/permission/role/${params.ids}`, config);
}
