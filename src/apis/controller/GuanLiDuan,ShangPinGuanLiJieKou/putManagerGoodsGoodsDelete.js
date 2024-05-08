import request from "@/utils/require";
/**
 * /manager/goods/goods/delete
 */
export function putManagerGoodsGoodsDelete(params, config) {
    const paramsInput = {
        goodsId: params.goodsId,
    };
    return request.put(`/manager/goods/goods/delete`, null, {
        params: paramsInput,
        ...config,
    });
}
