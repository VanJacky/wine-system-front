import request from "@/utils/require";
/**
 * /manager/goods/category/disable/{id}
 */
export function putManagerGoodsCategoryDisableById(params, config) {
    const paramsInput = {
        enableOperations: params.enableOperations,
    };
    return request.put(`/manager/goods/category/disable/${params.id}`, null, {
        params: paramsInput,
        ...config,
    });
}
