import request from "@/utils/require";
/**
 * 编辑
 * /manager/goods/producingarea/{id}
 */
export function putManagerGoodsProducingareaById(params, config) {
    const paramsInput = {
        ...params.producingArea,
    };
    return request.put(`/manager/goods/producingarea/${params.id}`, null, {
        params: paramsInput,
        ...config,
    });
}
