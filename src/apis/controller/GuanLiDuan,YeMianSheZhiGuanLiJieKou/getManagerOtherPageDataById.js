import request from "@/utils/require";
/**
 * 获取页面信息
 * /manager/other/pageData/{id}
 */
export function getManagerOtherPageDataById(params, config) {
    return request.get(`/manager/other/pageData/${params.id}`, config);
}
