import { type AxiosRequestConfig } from "axios";
import { type GoodsSearchParams } from "../../interface";
/**
 * /manager/goods/goods/auth/list
 */
export declare function getManagerGoodsGoodsAuthList(params: GetManagerGoodsGoodsAuthListParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        records: {
            goodsName: string;
            price: number;
            brandId: string;
            producerId: string;
            producerName: string;
            categoryPath: string;
            goodsUnit: string;
            sellingPoint: string;
            marketEnable: string;
            intro: string;
            buyCount: number;
            quantity: number;
            grade: number;
            thumbnail: string;
            small: string;
            original: string;
            storeCategoryPath: string;
            commentNum: number;
            storeId: string;
            storeName: string;
            templateId: string;
            authFlag: string;
            authMessage: string;
            underMessage: string;
            selfOperated: boolean;
            hasSkus: boolean;
            skuId: string;
            mobileIntro: string;
            goodsVideo: string;
            recommend: boolean;
            salesModel: string;
            splitRatio: number;
            skuLists: string;
            goodsType: string;
        }[];
        current: number;
        pages: number;
        size: number;
    };
}>;
export interface GetManagerGoodsGoodsAuthListParams {
    goodsSearchParams: GoodsSearchParams;
}
