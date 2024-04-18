import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/categoryParameters/{id}
 */
export declare function deleteManagerGoodsCategoryParametersById(params: DeleteManagerGoodsCategoryParametersByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerGoodsCategoryParametersByIdParams {
    id: string;
}
