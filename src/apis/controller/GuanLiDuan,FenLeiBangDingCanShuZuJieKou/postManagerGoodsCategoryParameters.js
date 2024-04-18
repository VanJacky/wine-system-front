import request from "@/utils/require";
/**
 * /manager/goods/categoryParameters
 */
export function postManagerGoodsCategoryParameters(input, config) {
    return request.post(`/manager/goods/categoryParameters`, input, config);
}
