import request from "@/utils/require";
/**
 * /manager/goods/goods/sku/list
 */
export function getManagerGoodsGoodsSkuList(params, config) {
    const paramsInput = {
        ...params.goodsSearchParams,
    };
    return request.get(`/manager/goods/goods/sku/list`, {
        params: paramsInput,
        ...config,
    });
}
