import request from "@/utils/require";
/**
 * 通过id获取物流公司
 * /manager/other/logistics/get/{id}
 */
export function getManagerOtherLogisticsGetById(params, config) {
    return request.get(`/manager/other/logistics/get/${params.id}`, config);
}
