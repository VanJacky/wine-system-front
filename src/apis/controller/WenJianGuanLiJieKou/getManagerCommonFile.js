import request from "@/utils/require";
/**
 * /manager/common/file
 */
export function getManagerCommonFile(params, config) {
    const paramsInput = {
        ...params.file,
        ...params.searchVO,
        ...params.pageVo,
    };
    return request.get(`/manager/common/file`, {
        params: paramsInput,
        ...config,
    });
}
