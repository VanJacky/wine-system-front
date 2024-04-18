import { type AxiosRequestConfig } from "axios";
import { type Region } from "../../interface";
/**
 * 更新地区
 * /manager/setting/region/{id}
 */
export declare function putManagerSettingRegionById(params: PutManagerSettingRegionByIdParams, input?: Region, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface PutManagerSettingRegionByIdParams {
    /** 地区ID */
    id: string;
}
