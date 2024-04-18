import request from "@/utils/require";
/**
 * /manager/goods/goods/list
 */
export function getManagerGoodsGoodsList(params, config) {
    const paramsInput = {
        ...params.goodsSearchParams,
    };
    return request.get(`/manager/goods/goods/list`, {
        params: paramsInput,
        ...config,
    });
}
