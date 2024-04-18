import request from "@/utils/require";
/**
 * /manager/goods/category/getBrandsList/{categoryId}
 */
export function getManagerGoodsCategoryGetBrandsListByCategoryId(params, config) {
    return request.get(`/manager/goods/category/getBrandsList/${params.categoryId}`, config);
}
