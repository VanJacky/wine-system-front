import request from "@/utils/require";
/**
 * 删除部门
 * /manager/permission/department/{ids}
 */
export function deleteManagerPermissionDepartmentByIds(params, config) {
    return request.delete(`/manager/permission/department/${params.ids}`, config);
}
