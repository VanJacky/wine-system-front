import request from "@/utils/require";
/**
 * /manager/store/store/get/detail/{storeId}
 */
export function getManagerStoreStoreGetDetailByStoreId(params, config) {
    return request.get(`/manager/store/store/get/detail/${params.storeId}`, config);
}
