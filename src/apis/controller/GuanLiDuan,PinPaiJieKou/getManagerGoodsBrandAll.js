import request from "@/utils/require";
/**
 * /manager/goods/brand/all
 */
export function getManagerGoodsBrandAll(config) {
    return request.get(`/manager/goods/brand/all`, config);
}
