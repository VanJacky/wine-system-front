import request from "@/utils/require";
/**
 * 添加
 * /manager/goods/producingarea
 */
export function postManagerGoodsProducingarea(params, config) {
    const paramsInput = {
        ...params.producingArea,
    };
    return request.post(`/manager/goods/producingarea`, null, {
        params: paramsInput,
        ...config,
    });
}
