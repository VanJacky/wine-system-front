import request from "@/utils/require";
/**
 * 更新部门
 * /manager/permission/department/{id}
 */
export function putManagerPermissionDepartmentById(params, input, config) {
    return request.put(`/manager/permission/department/${params.id}`, input, config);
}
