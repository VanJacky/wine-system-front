import request from "@/utils/require";
/**
 * /manager/goods/categoryParameters
 */
export function putManagerGoodsCategoryParameters(input, config) {
    return request.put(`/manager/goods/categoryParameters`, input, config);
}
