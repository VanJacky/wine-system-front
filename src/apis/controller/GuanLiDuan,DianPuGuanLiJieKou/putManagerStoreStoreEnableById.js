import request from "@/utils/require";
/**
 * /manager/store/store/enable/{id}
 */
export function putManagerStoreStoreEnableById(params, config) {
    return request.put(`/manager/store/store/enable/${params.id}`, config);
}
