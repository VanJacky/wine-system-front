import request from "@/utils/require";
/**
 * /manager/goods/categoryParameters/{id}
 */
export function deleteManagerGoodsCategoryParametersById(params, config) {
    return request.delete(`/manager/goods/categoryParameters/${params.id}`, config);
}
