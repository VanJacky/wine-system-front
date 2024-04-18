import request from "@/utils/require";
/**
 * /manager/goods/goodsUnit/{id}
 */
export function putManagerGoodsGoodsUnitById(params, input, config) {
    return request.put(`/manager/goods/goodsUnit/${params.id}`, input, config);
}
