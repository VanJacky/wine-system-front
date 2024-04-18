import request from "@/utils/require";
/**
 * 搜索菜单
 * /manager/permission/menu
 */
export function getManagerPermissionMenu(params, config) {
    const paramsInput = {
        ...params.searchParams,
    };
    return request.get(`/manager/permission/menu`, {
        params: paramsInput,
        ...config,
    });
}
