import { type AxiosRequestConfig } from "axios";
/**
 * 通过id获取子地区
 * /manager/setting/region/item/{id}
 */
export declare function getManagerSettingRegionItemById(params: GetManagerSettingRegionItemByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        parentId: string;
        adCode: string;
        cityCode: string;
        center: string;
        level: string;
        name: string;
        path: string;
        orderNum: number;
    }[];
}>;
export interface GetManagerSettingRegionItemByIdParams {
    /** 地区ID */
    id: string;
}
