import request from "@/utils/require";
/**
 * /manager/store/store
 */
export function getManagerStoreStore(params, config) {
    const paramsInput = {
        ...params.entity,
        ...params.page,
    };
    return request.get(`/manager/store/store`, {
        params: paramsInput,
        ...config,
    });
}
