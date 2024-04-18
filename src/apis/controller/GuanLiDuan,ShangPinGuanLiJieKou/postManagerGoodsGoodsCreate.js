import request from "@/utils/require";
/**
 * /manager/goods/goods/create
 */
export function postManagerGoodsGoodsCreate(input, config) {
    return request.post(`/manager/goods/goods/create`, input, config);
}
