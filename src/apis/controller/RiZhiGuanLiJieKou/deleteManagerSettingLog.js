import request from "@/utils/require";
/**
 * 全部删除
 * /manager/setting/log
 */
export function deleteManagerSettingLog(config) {
    return request.delete(`/manager/setting/log`, config);
}
