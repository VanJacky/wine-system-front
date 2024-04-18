import request from "@/utils/require";
/**
 * 批量通过id删除
 * /manager/setting/region/{ids}
 */
export function deleteManagerSettingRegionByIds(params, config) {
    return request.delete(`/manager/setting/region/${params.ids}`, config);
}
