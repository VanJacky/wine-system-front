import { type AxiosRequestConfig } from "axios";
/**
 * 同步高德行政地区数据
 * /manager/setting/region/sync
 */
export declare function postManagerSettingRegionSync(params: PostManagerSettingRegionSyncParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface PostManagerSettingRegionSyncParams {
    url: string;
}
