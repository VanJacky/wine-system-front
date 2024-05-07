import request from "@/utils/require";
/**
 * /manager/store/store/guarantee
 */
export function putManagerStoreStoreGuarantee(params, config) {
    const paramsInput = {
        id: params.id,
        guarantees: params.guarantees,
    };
    return request.put(`/manager/store/store/guarantee`, null, {
        params: paramsInput,
        ...config,
    });
}
