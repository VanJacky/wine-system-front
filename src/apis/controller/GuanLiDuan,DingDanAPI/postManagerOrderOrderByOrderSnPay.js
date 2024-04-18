import request from "@/utils/require";
/**
 * /manager/order/order/{orderSn}/pay
 */
export function postManagerOrderOrderByOrderSnPay(params, config) {
    return request.post(`/manager/order/order/${params.orderSn}/pay`, config);
}
