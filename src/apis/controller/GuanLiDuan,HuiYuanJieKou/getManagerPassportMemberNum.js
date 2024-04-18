import request from "@/utils/require";
/**
 * 根据条件查询会员总数
 * /manager/passport/member/num
 */
export function getManagerPassportMemberNum(params, config) {
    const paramsInput = {
        ...params.memberSearchVO,
    };
    return request.get(`/manager/passport/member/num`, {
        params: paramsInput,
        ...config,
    });
}
