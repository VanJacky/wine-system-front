import request from "@/utils/require";
/**
 * /manager/other/elasticsearch
 */
export function getManagerOtherElasticsearch(config) {
    return request.get(`/manager/other/elasticsearch`, config);
}
