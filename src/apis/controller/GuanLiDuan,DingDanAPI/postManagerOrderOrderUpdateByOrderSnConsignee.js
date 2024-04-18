import request from "@/utils/require";
/**
 * /manager/order/order/update/{orderSn}/consignee
 */
export function postManagerOrderOrderUpdateByOrderSnConsignee(params, input, config) {
    return request.post(`/manager/order/order/update/${params.orderSn}/consignee`, input, config);
}
