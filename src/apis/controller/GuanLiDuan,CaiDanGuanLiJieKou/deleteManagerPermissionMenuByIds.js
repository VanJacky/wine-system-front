import request from "@/utils/require";
/**
 * 批量删除
 * /manager/permission/menu/{ids}
 */
export function deleteManagerPermissionMenuByIds(params, config) {
    return request.delete(`/manager/permission/menu/${params.ids}`, config);
}
