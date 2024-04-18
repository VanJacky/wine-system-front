import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/brand/delByIds/{ids}
 */
export declare function deleteManagerGoodsBrandDelByIdsByIds(params: DeleteManagerGoodsBrandDelByIdsByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerGoodsBrandDelByIdsByIdsParams {
    ids: string[];
}
