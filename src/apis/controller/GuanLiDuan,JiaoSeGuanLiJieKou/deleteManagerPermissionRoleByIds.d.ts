import { type AxiosRequestConfig } from "axios";
/**
 * 批量删除
 * /manager/permission/role/{ids}
 */
export declare function deleteManagerPermissionRoleByIds(params: DeleteManagerPermissionRoleByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerPermissionRoleByIdsParams {
    ids: string[];
}
