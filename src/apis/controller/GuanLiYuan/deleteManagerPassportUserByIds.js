import request from "@/utils/require";
/**
 * 批量通过ids删除
 * /manager/passport/user/{ids}
 */
export function deleteManagerPassportUserByIds(params, config) {
    return request.delete(`/manager/passport/user/${params.ids}`, config);
}
