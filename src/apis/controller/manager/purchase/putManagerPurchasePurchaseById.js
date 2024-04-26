import request from "@/utils/require";
/**
 * /manager/purchase/purchase/{id}
 */
//只能禁用不能开启
export function putManagerPurchasePurchaseById(params, config) {
    return request.put(`/manager/purchase/purchase/${params.id}`, config);
}
