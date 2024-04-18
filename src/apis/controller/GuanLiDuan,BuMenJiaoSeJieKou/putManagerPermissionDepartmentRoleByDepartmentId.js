import request from "@/utils/require";
/**
 * 更新部门角色
 * /manager/permission/departmentRole/{departmentId}
 */
export function putManagerPermissionDepartmentRoleByDepartmentId(params, input, config) {
    return request.put(`/manager/permission/departmentRole/${params.departmentId}`, input, config);
}
