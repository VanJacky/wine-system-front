import request from "@/utils/require";
/**
 * 页面列表
 * /manager/other/pageData/pageDataList
 */
export function getManagerOtherPageDataPageDataList(params, config) {
    const paramsInput = {
        ...params.pageVO,
        ...params.pageDataDTO,
    };
    return request.get(`/manager/other/pageData/pageDataList`, {
        params: paramsInput,
        ...config,
    });
}
