import request from "@/utils/require";
/**
 * /manager/purchase/purchase/{id}
 */
export function getManagerPurchasePurchaseById(params, config) {
    return request.get(`/manager/purchase/purchase/${params.id}`, config);
}
