import request from "@/utils/require";
/**
 * /manager/goods/goods/update/{goodsId}
 */
export function putManagerGoodsGoodsUpdateByGoodsId(params, input, config) {
    return request.put(`/manager/goods/goods/update/${params.goodsId}`, input, config);
}
