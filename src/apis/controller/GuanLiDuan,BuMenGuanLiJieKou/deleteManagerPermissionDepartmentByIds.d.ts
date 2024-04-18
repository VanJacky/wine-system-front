import { type AxiosRequestConfig } from "axios";
/**
 * 删除部门
 * /manager/permission/department/{ids}
 */
export declare function deleteManagerPermissionDepartmentByIds(params: DeleteManagerPermissionDepartmentByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerPermissionDepartmentByIdsParams {
    ids: string[];
}
