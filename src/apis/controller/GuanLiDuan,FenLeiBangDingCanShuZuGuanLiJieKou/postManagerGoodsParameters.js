import request from "@/utils/require";
/**
 * /manager/goods/parameters
 */
export function postManagerGoodsParameters(input, config) {
    return request.post(`/manager/goods/parameters`, input, config);
}
