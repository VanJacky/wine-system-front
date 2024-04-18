import request from "@/utils/require";
/**
 * 获取产地树
 * /manager/goods/producingarea/tree
 */
export function getManagerGoodsProducingareaTree(config) {
    return request.get(`/manager/goods/producingarea/tree`, config);
}
