import request from "@/utils/require";
/**
 * /manager/goods/parameters/{id}
 */
export function deleteManagerGoodsParametersById(params, config) {
    return request.delete(`/manager/goods/parameters/${params.id}`, config);
}
