import { type AxiosRequestConfig } from "axios";
import { type ProducingArea, type SearchVo, type PageVo } from "../../interface";
/**
 * 分页
 * /manager/goods/producingarea/page
 */
export declare function getManagerGoodsProducingareaPage(params: GetManagerGoodsProducingareaPageParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        records: {
            producerName: string;
            province: string;
            city: string;
            level: number;
            parentId: string;
            sort: number;
        }[];
        current: number;
        pages: number;
        size: number;
    };
}>;
export interface GetManagerGoodsProducingareaPageParams {
    entity: ProducingArea;
    searchVo: SearchVo;
    page: PageVo;
}
