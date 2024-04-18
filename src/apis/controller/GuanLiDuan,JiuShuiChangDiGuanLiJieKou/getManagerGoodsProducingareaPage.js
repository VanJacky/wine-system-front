import request from "@/utils/require";
/**
 * 分页
 * /manager/goods/producingarea/page
 */
export function getManagerGoodsProducingareaPage(params, config) {
    const paramsInput = {
        ...params.entity,
        ...params.searchVo,
        ...params.page,
    };
    return request.get(`/manager/goods/producingarea/page`, {
        params: paramsInput,
        ...config,
    });
}
