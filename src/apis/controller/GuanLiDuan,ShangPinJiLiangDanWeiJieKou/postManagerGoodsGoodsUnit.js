import request from "@/utils/require";
/**
 * /manager/goods/goodsUnit
 */
export function postManagerGoodsGoodsUnit(input, config) {
    return request.post(`/manager/goods/goodsUnit`, input, config);
}
