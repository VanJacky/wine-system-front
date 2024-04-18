import request from "@/utils/require";
/**
 * 删除页面
 * /manager/other/pageData/remove/{id}
 */
export function deleteManagerOtherPageDataRemoveById(params, config) {
    return request.delete(`/manager/other/pageData/remove/${params.id}`, config);
}
