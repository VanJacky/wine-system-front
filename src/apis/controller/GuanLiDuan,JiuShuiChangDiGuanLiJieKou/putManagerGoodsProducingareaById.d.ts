import { type AxiosRequestConfig } from "axios";
import { type ProducingArea } from "../../interface";
/**
 * 编辑
 * /manager/goods/producingarea/{id}
 */
export declare function putManagerGoodsProducingareaById(params: PutManagerGoodsProducingareaByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface PutManagerGoodsProducingareaByIdParams {
    /** 菜单ID */
    id: string;
    producingArea: ProducingArea;
}
