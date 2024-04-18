import request from "@/utils/require";
/**
 * /manager/purchase/purchase
 */
export function postManagerPurchasePurchase(input, config) {
    return request.post(`/manager/purchase/purchase`, input, config);
}
