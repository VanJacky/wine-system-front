import request from "@/utils/require";
/**
 * /manager/goods/category/{id}
 */
export function deleteManagerGoodsCategoryById(params, config) {
    return request.delete(`/manager/goods/category/${params.id}`, config);
}
