import request from "@/utils/require";
/**
 * /manager/goods/goods/{goodsIds}/auth
 */
export function putManagerGoodsGoodsByGoodsIdsAuth(params, config) {
    const paramsInput = {
        authFlag: params.authFlag,
    };
    return request.put(`/manager/goods/goods/${params.goodsIds}/auth`, null, {
        params: paramsInput,
        ...config,
    });
}
