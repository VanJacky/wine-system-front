import request from "@/utils/require";
/**
 * /manager/order/order/queryExportOrder
 */
export function getManagerOrderOrderQueryExportOrder(params, config) {
    const paramsInput = {
        ...params.orderSearchParams,
    };
    return request.get(`/manager/order/order/queryExportOrder`, {
        params: paramsInput,
        ...config,
    });
}
