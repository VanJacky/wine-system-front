import request from "@/utils/require";
/**
 * /manager/goods/goodsUnit
 */
export function getManagerGoodsGoodsUnit(params, config) {
    const paramsInput = {
        ...params.pageVO,
    };
    return request.get(`/manager/goods/goodsUnit`, {
        params: paramsInput,
        ...config,
    });
}
