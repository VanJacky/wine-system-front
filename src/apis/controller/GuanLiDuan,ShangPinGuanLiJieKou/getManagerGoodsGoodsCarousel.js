import request from "@/utils/require";
/**
 * /manager/goods/goods/carousel
 */
export function getManagerGoodsGoodsCarousel(config) {
    return request.get(`/manager/goods/goods/carousel`, config);
}
