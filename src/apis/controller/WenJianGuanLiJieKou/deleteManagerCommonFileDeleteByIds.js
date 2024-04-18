import request from "@/utils/require";
/**
 * /manager/common/file/delete/{ids}
 */
export function deleteManagerCommonFileDeleteByIds(params, config) {
    return request.delete(`/manager/common/file/delete/${params.ids}`, config);
}
