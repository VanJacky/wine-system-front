import { type AxiosRequestConfig } from "axios";
import { type ProducingArea } from "../../interface";
/**
 * 添加
 * /manager/goods/producingarea
 */
export declare function postManagerGoodsProducingarea(params: PostManagerGoodsProducingareaParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        producerName: string;
        province: string;
        city: string;
        level: number;
        parentId: string;
        sort: number;
    };
}>;
export interface PostManagerGoodsProducingareaParams {
    producingArea: ProducingArea;
}
