import request from "@/utils/require";
/**
 * 分页获取全部
 * /manager/setting/log/getAllByPage
 */
export function getManagerSettingLogGetAllByPage(params, config) {
    const paramsInput = {
        type: params.type,
        searchKey: params.searchKey,
        operatorName: params.operatorName,
        ...params.searchVo,
        ...params.pageVo,
    };
    return request.get(`/manager/setting/log/getAllByPage`, {
        params: paramsInput,
        ...config,
    });
}
