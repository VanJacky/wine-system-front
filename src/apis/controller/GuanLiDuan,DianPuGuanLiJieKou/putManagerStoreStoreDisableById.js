import request from "@/utils/require";
/**
 * /manager/store/store/disable/{id}
 */
export function putManagerStoreStoreDisableById(params, config) {
    return request.put(`/manager/store/store/disable/${params.id}`, config);
}
