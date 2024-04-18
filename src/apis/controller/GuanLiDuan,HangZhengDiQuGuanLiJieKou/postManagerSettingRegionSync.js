import request from "@/utils/require";
/**
 * 同步高德行政地区数据
 * /manager/setting/region/sync
 */
export function postManagerSettingRegionSync(params, config) {
    const paramsInput = {
        url: params.url,
    };
    return request.post(`/manager/setting/region/sync`, null, {
        params: paramsInput,
        ...config,
    });
}
