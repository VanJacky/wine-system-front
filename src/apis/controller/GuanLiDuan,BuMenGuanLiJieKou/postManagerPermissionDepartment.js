import request from "@/utils/require";
/**
 * 新增部门
 * /manager/permission/department
 */
export function postManagerPermissionDepartment(input, config) {
    return request.post(`/manager/permission/department`, input, config);
}
