import request from "@/utils/require";
/**
 * 多条件分页获取用户列表
 * /manager/passport/user
 */
export function getManagerPassportUser(params, config) {
    const paramsInput = {
        ...params.user,
        ...params.searchVo,
        ...params.pageVo,
    };
    return request.get(`/manager/passport/user`, {
        params: paramsInput,
        ...config,
    });
}
