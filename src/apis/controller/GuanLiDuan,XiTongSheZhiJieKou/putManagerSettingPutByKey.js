import request from "@/utils/require";
/**
 * 更新配置
 * /manager/setting/put/{key}
 */
export function putManagerSettingPutByKey(params, input, config) {
    return request.put(`/manager/setting/put/${params.key}`, input, config);
}
