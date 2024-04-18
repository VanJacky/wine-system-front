import request from "@/utils/require";
/**
 * 通过ID获取会员信息
 * /manager/passport/member/{id}
 */
export function getManagerPassportMemberById(params, config) {
    return request.get(`/manager/passport/member/${params.id}`, config);
}
