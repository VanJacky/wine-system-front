import { type AxiosRequestConfig } from "axios";
/**
 * 批量删除
 * /manager/goods/producingarea/{ids}
 */
export declare function deleteManagerGoodsProducingareaByIds(params: DeleteManagerGoodsProducingareaByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerGoodsProducingareaByIdsParams {
    ids: string[];
}
