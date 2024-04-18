import request from "@/utils/require";
/**
 * 添加物流公司
 * /manager/other/logistics/save
 */
export function postManagerOtherLogisticsSave(input, config) {
    return request.post(`/manager/other/logistics/save`, input, config);
}
