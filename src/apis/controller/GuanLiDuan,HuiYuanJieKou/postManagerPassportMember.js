import request from "@/utils/require";
/**
 * 添加会员
 * /manager/passport/member
 */
export function postManagerPassportMember(input, config) {
    return request.post(`/manager/passport/member`, input, config);
}
