import request from "@/utils/require";
/**
 * 批量删除
 * /manager/goods/producingarea/{ids}
 */
export function deleteManagerGoodsProducingareaByIds(params, config) {
    return request.delete(`/manager/goods/producingarea/${params.ids}`, config);
}
