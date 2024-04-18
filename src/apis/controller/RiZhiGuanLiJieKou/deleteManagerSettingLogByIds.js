import request from "@/utils/require";
/**
 * 批量删除
 * /manager/setting/log/{ids}
 */
export function deleteManagerSettingLogByIds(params, config) {
    return request.delete(`/manager/setting/log/${params.ids}`, config);
}
