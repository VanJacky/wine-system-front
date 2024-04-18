import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/parameters/{id}
 */
export declare function deleteManagerGoodsParametersById(params: DeleteManagerGoodsParametersByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerGoodsParametersByIdParams {
    id: string;
}
