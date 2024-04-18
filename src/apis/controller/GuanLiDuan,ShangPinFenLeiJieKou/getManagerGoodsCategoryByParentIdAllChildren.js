import request from "@/utils/require";
/**
 * /manager/goods/category/{parentId}/all-children
 */
export function getManagerGoodsCategoryByParentIdAllChildren(params, config) {
    return request.get(`/manager/goods/category/${params.parentId}/all-children`, config);
}
