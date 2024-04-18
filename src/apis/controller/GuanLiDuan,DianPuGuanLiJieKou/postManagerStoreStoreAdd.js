import request from "@/utils/require";
/**
 * /manager/store/store/add
 */
export function postManagerStoreStoreAdd(input, config) {
    return request.post(`/manager/store/store/add`, input, config);
}
