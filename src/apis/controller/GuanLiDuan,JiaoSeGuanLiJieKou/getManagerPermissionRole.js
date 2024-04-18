import request from "@/utils/require";
/**
 * 查询
 * /manager/permission/role
 */
export function getManagerPermissionRole(params, config) {
    const paramsInput = {
        ...params.pageVo,
        ...params.role,
    };
    return request.get(`/manager/permission/role`, {
        params: paramsInput,
        ...config,
    });
}
