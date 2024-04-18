import request from "@/utils/require";
/**
 * 搜索产地
 * /manager/goods/producingarea
 */
export function getManagerGoodsProducingarea(params, config) {
    const paramsInput = {
        ...params.searchParams,
    };
    return request.get(`/manager/goods/producingarea`, {
        params: paramsInput,
        ...config,
    });
}
