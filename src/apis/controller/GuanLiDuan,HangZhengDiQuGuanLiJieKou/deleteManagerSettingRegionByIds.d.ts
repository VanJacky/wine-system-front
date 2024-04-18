import { type AxiosRequestConfig } from "axios";
/**
 * 批量通过id删除
 * /manager/setting/region/{ids}
 */
export declare function deleteManagerSettingRegionByIds(params: DeleteManagerSettingRegionByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerSettingRegionByIdsParams {
    ids: string[];
}
