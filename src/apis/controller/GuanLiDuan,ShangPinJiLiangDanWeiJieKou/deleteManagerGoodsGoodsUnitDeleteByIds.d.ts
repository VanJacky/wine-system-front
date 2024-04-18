import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goodsUnit/delete/{ids}
 */
export declare function deleteManagerGoodsGoodsUnitDeleteByIds(params: DeleteManagerGoodsGoodsUnitDeleteByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerGoodsGoodsUnitDeleteByIdsParams {
    ids: string[];
}
