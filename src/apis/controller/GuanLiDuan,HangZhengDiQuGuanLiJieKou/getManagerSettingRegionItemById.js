import request from "@/utils/require";
/**
 * 通过id获取子地区
 * /manager/setting/region/item/{id}
 */
export function getManagerSettingRegionItemById(params, config) {
    return request.get(`/manager/setting/region/item/${params.id}`, config);
}
