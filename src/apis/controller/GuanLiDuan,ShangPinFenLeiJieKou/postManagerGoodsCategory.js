import request from "@/utils/require";
/**
 * /manager/goods/category
 */
export function postManagerGoodsCategory(input, config) {
    return request.post(`/manager/goods/category`, input, config);
}
