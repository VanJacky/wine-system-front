import request from "@/utils/require";
/**
 * /manager/order/order/getTraces/{orderSn}
 */
export function postManagerOrderOrderGetTracesByOrderSn(params, config) {
    return request.post(`/manager/order/order/getTraces/${params.orderSn}`, config);
}
