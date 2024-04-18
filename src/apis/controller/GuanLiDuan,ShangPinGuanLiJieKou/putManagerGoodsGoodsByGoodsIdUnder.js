import request from "@/utils/require";
/**
 * /manager/goods/goods/{goodsId}/under
 */
export function putManagerGoodsGoodsByGoodsIdUnder(params, config) {
    const paramsInput = {
        reason: params.reason,
    };
    return request.put(`/manager/goods/goods/${params.goodsId}/under`, null, {
        params: paramsInput,
        ...config,
    });
}
