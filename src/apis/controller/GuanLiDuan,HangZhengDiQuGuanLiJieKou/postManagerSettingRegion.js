import request from "@/utils/require";
/**
 * 增加地区
 * /manager/setting/region
 */
export function postManagerSettingRegion(input, config) {
    return request.post(`/manager/setting/region`, input, config);
}
