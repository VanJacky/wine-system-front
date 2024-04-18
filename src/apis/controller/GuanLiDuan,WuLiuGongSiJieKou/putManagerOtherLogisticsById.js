import request from "@/utils/require";
/**
 * 编辑物流公司
 * /manager/other/logistics/{id}
 */
export function putManagerOtherLogisticsById(params, input, config) {
    return request.put(`/manager/other/logistics/${params.id}`, input, config);
}
