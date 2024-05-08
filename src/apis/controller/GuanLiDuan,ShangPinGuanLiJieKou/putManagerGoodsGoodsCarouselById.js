import request from "@/utils/require";
/**
 * /manager/goods/goods/carousel/{id}
 */
export function putManagerGoodsGoodsCarouselById(params, config) {
    return request.put(`/manager/goods/goods/carousel/${params.id}`, config);
}
