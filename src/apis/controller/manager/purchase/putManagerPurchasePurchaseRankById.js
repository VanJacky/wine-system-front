import request from "@/utils/require";
/**
 * /manager/purchase/purchase/rank/{id}
 */
export function putManagerPurchasePurchaseRankById(params, config) {
    const paramsInput = {
        rankValue: params.rankValue,
    };
    return request.put(`/manager/purchase/purchase/rank/${params.id}`, null, {
        params: paramsInput,
        ...config,
    });
}
