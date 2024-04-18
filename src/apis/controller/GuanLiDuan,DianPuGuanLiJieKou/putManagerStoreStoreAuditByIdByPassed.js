import request from "@/utils/require";
/**
 * /manager/store/store/audit/{id}/{passed}
 */
export function putManagerStoreStoreAuditByIdByPassed(params, config) {
    return request.put(`/manager/store/store/audit/${params.id}/${params.passed}`, config);
}
