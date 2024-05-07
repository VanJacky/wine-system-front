import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goods/carousel
 */
export declare function getManagerGoodsGoodsCarousel(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: string[];
}>;
