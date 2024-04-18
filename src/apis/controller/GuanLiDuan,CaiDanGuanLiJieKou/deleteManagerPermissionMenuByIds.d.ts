import { type AxiosRequestConfig } from "axios";
/**
 * 批量删除
 * /manager/permission/menu/{ids}
 */
export declare function deleteManagerPermissionMenuByIds(params: DeleteManagerPermissionMenuByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerPermissionMenuByIdsParams {
    ids: string[];
}
