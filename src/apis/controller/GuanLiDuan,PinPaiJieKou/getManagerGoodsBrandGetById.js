import request from "@/utils/require";
/**
 * /manager/goods/brand/get/{id}
 */
export function getManagerGoodsBrandGetById(params, config) {
    return request.get(`/manager/goods/brand/get/${params.id}`, config);
}
