import request from "@/utils/require";
/**
 * /manager/goods/brand/getByPage
 */
export function getManagerGoodsBrandGetByPage(params, config) {
    const paramsInput = {
        ...params.page,
    };
    return request.get(`/manager/goods/brand/getByPage`, {
        params: paramsInput,
        ...config,
    });
}
