import request from "@/utils/require";
/**
 * 修改会员基本信息
 * /manager/passport/member
 */
export function putManagerPassportMember(input, config) {
    return request.put(`/manager/passport/member`, input, config);
}
