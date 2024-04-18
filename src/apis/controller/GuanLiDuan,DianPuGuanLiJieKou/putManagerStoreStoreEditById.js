import request from "@/utils/require";
/**
 * /manager/store/store/edit/{id}
 */
export function putManagerStoreStoreEditById(params, input, config) {
    return request.put(`/manager/store/store/edit/${params.id}`, input, config);
}
