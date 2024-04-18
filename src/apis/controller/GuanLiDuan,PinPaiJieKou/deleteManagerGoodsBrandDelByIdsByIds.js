import request from "@/utils/require";
/**
 * /manager/goods/brand/delByIds/{ids}
 */
export function deleteManagerGoodsBrandDelByIdsByIds(params, config) {
    return request.delete(`/manager/goods/brand/delByIds/${params.ids}`, config);
}
