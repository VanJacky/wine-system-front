import request from "@/utils/require";
/**
 * /manager/goods/categoryParameters/{categoryId}
 */
export function getManagerGoodsCategoryParametersByCategoryId(params, config) {
    return request.get(`/manager/goods/categoryParameters/${params.categoryId}`, config);
}
