import request from "@/utils/require";
/**
 * /manager/purchase/purchase/{id}
 */
export function putManagerPurchasePurchaseById(params, config) {
    return request.put(`/manager/purchase/purchase/${params.id}`, config);
}
