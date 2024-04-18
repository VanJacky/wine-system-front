import request from "@/utils/require";
/**
 * /manager/goods/goodsUnit/get/{id}
 */
export function getManagerGoodsGoodsUnitGetById(params, config) {
    return request.get(`/manager/goods/goodsUnit/get/${params.id}`, config);
}
