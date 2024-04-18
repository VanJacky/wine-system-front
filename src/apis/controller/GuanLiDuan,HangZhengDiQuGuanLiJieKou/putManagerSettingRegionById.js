import request from "@/utils/require";
/**
 * 更新地区
 * /manager/setting/region/{id}
 */
export function putManagerSettingRegionById(params, input, config) {
    return request.put(`/manager/setting/region/${params.id}`, input, config);
}
