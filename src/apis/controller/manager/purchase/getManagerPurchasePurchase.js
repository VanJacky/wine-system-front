import request from "@/utils/require";
/**
 * /manager/purchase/purchase
 */
export function getManagerPurchasePurchase(params, config) {
    const paramsInput = {
        ...params.purchaseOrderSearchParams,
    };
    return request.get(`/manager/purchase/purchase`, {
        params: paramsInput,
        ...config,
    });
}
