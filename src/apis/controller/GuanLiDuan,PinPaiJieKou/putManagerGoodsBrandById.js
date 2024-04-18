import request from "@/utils/require";
/**
 * /manager/goods/brand/{id}
 */
export function putManagerGoodsBrandById(params, input, config) {
    return request.put(`/manager/goods/brand/${params.id}`, input, config);
}
