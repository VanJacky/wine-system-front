import request from "@/utils/require";
/**
 * 删除物流公司
 * /manager/other/logistics/delete/{id}
 */
export function deleteManagerOtherLogisticsDeleteById(params, config) {
    return request.delete(`/manager/other/logistics/delete/${params.id}`, config);
}
