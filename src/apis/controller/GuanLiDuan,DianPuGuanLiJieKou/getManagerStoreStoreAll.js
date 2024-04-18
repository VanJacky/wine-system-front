import request from "@/utils/require";
/**
 * /manager/store/store/all
 */
export function getManagerStoreStoreAll(config) {
    return request.get(`/manager/store/store/all`, config);
}
