import { type AxiosRequestConfig } from "axios";
/**
 * 删除页面
 * /manager/other/pageData/remove/{id}
 */
export declare function deleteManagerOtherPageDataRemoveById(params: DeleteManagerOtherPageDataRemoveByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerOtherPageDataRemoveByIdParams {
    id: string;
}
