import { type AxiosRequestConfig } from "axios";
/**
 * 获取产地树
 * /manager/goods/producingarea/tree
 */
export declare function getManagerGoodsProducingareaTree(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
        children: any[];
    }[];
}>;
