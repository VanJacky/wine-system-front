import request from "@/utils/require";
/**
 * 修改会员状态,开启关闭会员
 * /manager/passport/member/updateMemberStatus
 */
export function putManagerPassportMemberUpdateMemberStatus(params, config) {
    const paramsInput = {
        memberIds: params.memberIds,
        disabled: params.disabled,
    };
    return request.put(`/manager/passport/member/updateMemberStatus`, null, {
        params: paramsInput,
        ...config,
    });
}
