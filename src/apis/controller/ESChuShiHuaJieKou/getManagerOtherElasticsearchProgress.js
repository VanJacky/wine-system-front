import request from "@/utils/require";
/**
 * /manager/other/elasticsearch/progress
 */
export function getManagerOtherElasticsearchProgress(config) {
    return request.get(`/manager/other/elasticsearch/progress`, config);
}
