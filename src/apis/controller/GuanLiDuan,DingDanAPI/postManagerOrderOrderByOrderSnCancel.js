import request from "@/utils/require";
/**
 * /manager/order/order/{orderSn}/cancel
 */
export function postManagerOrderOrderByOrderSnCancel(params, config) {
    const paramsInput = {
        reason: params.reason,
    };
    return request.post(`/manager/order/order/${params.orderSn}/cancel`, null, {
        params: paramsInput,
        ...config,
    });
}
