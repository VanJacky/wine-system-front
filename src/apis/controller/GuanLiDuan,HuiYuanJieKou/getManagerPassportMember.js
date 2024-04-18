import request from "@/utils/require";
/**
 * 会员分页列表
 * /manager/passport/member
 */
export function getManagerPassportMember(params, config) {
    const paramsInput = {
        ...params.memberSearchVO,
        ...params.page,
    };
    return request.get(`/manager/passport/member`, {
        params: paramsInput,
        ...config,
    });
}
