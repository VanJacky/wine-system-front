import request from "@/utils/require";
/**
 * 获取树状结构
 * /manager/permission/department
 */
export function getManagerPermissionDepartment(params, config) {
    const paramsInput = {
        ...params.entity,
        ...params.searchVo,
    };
    return request.get(`/manager/permission/department`, {
        params: paramsInput,
        ...config,
    });
}
