import request from "@/utils/require";
/**
 * 查看配置
 * /manager/setting/get/{key}
 */
export function getManagerSettingGetByKey(params, config) {
    return request.get(`/manager/setting/get/${params.key}`, config);
}
