import request from "@/utils/require";
/**
 * /manager/goods/goodsUnit/delete/{ids}
 */
export function deleteManagerGoodsGoodsUnitDeleteByIds(params, config) {
    return request.delete(`/manager/goods/goodsUnit/delete/${params.ids}`, config);
}
