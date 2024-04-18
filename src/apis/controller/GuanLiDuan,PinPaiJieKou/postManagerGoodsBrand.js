import request from "@/utils/require";
/**
 * /manager/goods/brand
 */
export function postManagerGoodsBrand(input, config) {
    return request.post(`/manager/goods/brand`, input, config);
}
