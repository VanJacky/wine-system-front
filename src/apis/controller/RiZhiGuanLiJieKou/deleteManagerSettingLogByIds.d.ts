import { type AxiosRequestConfig } from "axios";
/**
 * 批量删除
 * /manager/setting/log/{ids}
 */
export declare function deleteManagerSettingLogByIds(params: DeleteManagerSettingLogByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerSettingLogByIdsParams {
    ids: string[];
}
