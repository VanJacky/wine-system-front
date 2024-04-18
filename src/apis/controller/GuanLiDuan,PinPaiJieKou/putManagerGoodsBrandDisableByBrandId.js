import request from "@/utils/require";
/**
 * /manager/goods/brand/disable/{brandId}
 */
export function putManagerGoodsBrandDisableByBrandId(params, config) {
    const paramsInput = {
        disable: params.disable,
    };
    return request.put(`/manager/goods/brand/disable/${params.brandId}`, null, {
        params: paramsInput,
        ...config,
    });
}
