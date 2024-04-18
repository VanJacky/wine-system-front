import request from "@/utils/require";
/**
 * /manager/goods/goods/get/{id}
 */
export function getManagerGoodsGoodsGetById(params, config) {
    return request.get(`/manager/goods/goods/get/${params.id}`, config);
}
