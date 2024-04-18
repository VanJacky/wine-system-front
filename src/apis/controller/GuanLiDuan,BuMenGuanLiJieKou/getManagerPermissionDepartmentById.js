import request from "@/utils/require";
/**
 * 查看部门详情
 * /manager/permission/department/{id}
 */
export function getManagerPermissionDepartmentById(params, config) {
    return request.get(`/manager/permission/department/${params.id}`, config);
}
