import request from "@/utils/require";
/**
 * /manager/goods/parameters
 */
export function putManagerGoodsParameters(input, config) {
    return request.put(`/manager/goods/parameters`, input, config);
}
