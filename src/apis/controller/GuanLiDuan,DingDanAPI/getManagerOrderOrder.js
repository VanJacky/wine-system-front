import request from "@/utils/require";
/**
 * /manager/order/order
 */
export function getManagerOrderOrder(params, config) {
    const paramsInput = {
        ...params.orderSearchParams,
    };
    return request.get(`/manager/order/order`, {
        params: paramsInput,
        ...config,
    });
}
