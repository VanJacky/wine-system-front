import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goods/carousel/{id}
 */
export declare function putManagerGoodsGoodsCarouselById(params: PutManagerGoodsGoodsCarouselByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: string[];
}>;
export interface PutManagerGoodsGoodsCarouselByIdParams {
    /** 关联的酒水ID */
    id: string;
}
