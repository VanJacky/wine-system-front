import request from "@/utils/require";
/**
 * /manager/goods/category/allChildren
 */
export function getManagerGoodsCategoryAllChildren(config) {
    return request.get(`/manager/goods/category/allChildren`, config);
}
