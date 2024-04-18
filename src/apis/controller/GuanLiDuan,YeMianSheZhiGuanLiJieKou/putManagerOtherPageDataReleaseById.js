import request from "@/utils/require";
/**
 * 发布页面
 * /manager/other/pageData/release/{id}
 */
export function putManagerOtherPageDataReleaseById(params, config) {
    return request.put(`/manager/other/pageData/release/${params.id}`, config);
}
