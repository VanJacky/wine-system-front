import { type AxiosRequestConfig } from "axios";
/**
 * /manager/common/file/delete/{ids}
 */
export declare function deleteManagerCommonFileDeleteByIds(params: DeleteManagerCommonFileDeleteByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerCommonFileDeleteByIdsParams {
    ids: string[];
}
