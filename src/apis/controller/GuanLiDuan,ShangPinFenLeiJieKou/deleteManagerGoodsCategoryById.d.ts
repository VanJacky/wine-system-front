import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/category/{id}
 */
export declare function deleteManagerGoodsCategoryById(params: DeleteManagerGoodsCategoryByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerGoodsCategoryByIdParams {
    id: string;
}
