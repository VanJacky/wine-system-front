import { type AxiosRequestConfig } from "axios";
import { type ProducingAreaSearchParams } from "../../interface";
/**
 * 搜索产地
 * /manager/goods/producingarea
 */
export declare function getManagerGoodsProducingarea(params: GetManagerGoodsProducingareaParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
        rank: number;
    }[];
}>;
export interface GetManagerGoodsProducingareaParams {
    searchParams: ProducingAreaSearchParams;
}
