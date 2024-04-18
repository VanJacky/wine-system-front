import request from "@/utils/require";
/**
 * /manager/goods/category
 */
export function putManagerGoodsCategory(input, config) {
    return request.put(`/manager/goods/category`, input, config);
}
