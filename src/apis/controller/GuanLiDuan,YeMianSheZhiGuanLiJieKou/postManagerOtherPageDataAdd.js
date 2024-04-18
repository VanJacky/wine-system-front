import request from "@/utils/require";
/**
 * 添加页面
 * /manager/other/pageData/add
 */
export function postManagerOtherPageDataAdd(input, config) {
    return request.post(`/manager/other/pageData/add`, input, config);
}
