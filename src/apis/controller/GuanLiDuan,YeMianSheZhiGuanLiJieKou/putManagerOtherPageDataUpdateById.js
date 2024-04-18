import request from "@/utils/require";
/**
 * 修改页面
 * /manager/other/pageData/update/{id}
 */
export function putManagerOtherPageDataUpdateById(params, input, config) {
    return request.put(`/manager/other/pageData/update/${params.id}`, input, config);
}
