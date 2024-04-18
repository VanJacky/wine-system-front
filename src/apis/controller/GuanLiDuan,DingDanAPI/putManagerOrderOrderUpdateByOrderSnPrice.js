import request from "@/utils/require";
/**
 * /manager/order/order/update/{orderSn}/price
 */
export function putManagerOrderOrderUpdateByOrderSnPrice(params, config) {
    const paramsInput = {
        price: params.price,
    };
    return request.put(`/manager/order/order/update/${params.orderSn}/price`, null, {
        params: paramsInput,
        ...config,
    });
}
