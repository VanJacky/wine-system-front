import request from "@/utils/require";
/**
 * 分页获取物流公司
 * /manager/other/logistics/getByPage
 */
export function getManagerOtherLogisticsGetByPage(params, config) {
    const paramsInput = {
        ...params.page,
    };
    return request.get(`/manager/other/logistics/getByPage`, {
        params: paramsInput,
        ...config,
    });
}
