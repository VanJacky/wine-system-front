import request from "@/utils/require";
/**
 * /manager/order/order/{orderSn}
 */
export function getManagerOrderOrderByOrderSn(params, config) {
    return request.get(`/manager/order/order/${params.orderSn}`, config);
}
