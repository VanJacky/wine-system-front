import { type AxiosRequestConfig } from "axios";
/**
 * 通过id获取地区详情
 * /manager/setting/region/{id}
 */
export declare function getManagerSettingRegionById(params: GetManagerSettingRegionByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
    };
}>;
export interface GetManagerSettingRegionByIdParams {
    /** 地区ID */
    id: string;
}
