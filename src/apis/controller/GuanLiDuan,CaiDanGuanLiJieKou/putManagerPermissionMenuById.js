import request from "@/utils/require";
/**
 * 编辑
 * /manager/permission/menu/{id}
 */
export function putManagerPermissionMenuById(params, config) {
    const paramsInput = {
        ...params.menu,
    };
    return request.put(`/manager/permission/menu/${params.id}`, null, {
        params: paramsInput,
        ...config,
    });
}
