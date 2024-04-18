import request from "@/utils/require";
/**
 * 查看部门拥有的角色
 * /manager/permission/departmentRole/{departmentId}
 */
export function getManagerPermissionDepartmentRoleByDepartmentId(params, config) {
    return request.get(`/manager/permission/departmentRole/${params.departmentId}`, config);
}
