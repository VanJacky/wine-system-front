import request from "@/utils/require";
/**
 * /manager/goods/goods/auth/list
 */
export function getManagerGoodsGoodsAuthList(params, config) {
    const paramsInput = {
        ...params.goodsSearchParams,
    };
    return request.get(`/manager/goods/goods/auth/list`, {
        params: paramsInput,
        ...config,
    });
}
