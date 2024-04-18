import request from "@/utils/require";
/**
 * 通过id获取地区详情
 * /manager/setting/region/{id}
 */
export function getManagerSettingRegionById(params, config) {
    return request.get(`/manager/setting/region/${params.id}`, config);
}
