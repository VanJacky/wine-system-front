import request from "@/utils/require";
/**
 * /manager/goods/goods/{goodsId}/up
 */
export function putManagerGoodsGoodsByGoodsIdUp(params, config) {
    return request.put(`/manager/goods/goods/${params.goodsId}/up`, config);
}
