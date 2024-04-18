import { type AxiosRequestConfig } from "axios";
import { type Region } from "../../interface";
/**
 * 增加地区
 * /manager/setting/region
 */
export declare function postManagerSettingRegion(input?: Region, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
