import request from "@/utils/require";
/**
 * 添加
 * /manager/permission/menu
 */
export function postManagerPermissionMenu(params, config) {
    const paramsInput = {
        ...params.menu,
    };
    return request.post(`/manager/permission/menu`, null, {
        params: paramsInput,
        ...config,
    });
}
