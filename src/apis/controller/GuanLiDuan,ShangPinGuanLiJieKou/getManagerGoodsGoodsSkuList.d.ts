import { type AxiosRequestConfig } from "axios";
import { type GoodsSearchParams } from "../../interface";
/**
 * /manager/goods/goods/sku/list
 */
export declare function getManagerGoodsGoodsSkuList(params: GetManagerGoodsGoodsSkuListParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        records: {
            goodsId: string;
            simpleSpecs: string;
            freightTemplateId: string;
            promotionFlag: boolean;
            promotionPrice: number;
            goodsName: string;
            sn: string;
            brandId: string;
            categoryPath: string;
            goodsUnit: string;
            sellingPoint: string;
            weight: number;
            marketEnable: string;
            intro: string;
            price: number;
            cost: number;
            viewCount: number;
            buyCount: number;
            quantity: number;
            grade: number;
            thumbnail: string;
            big: string;
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
            mobileIntro: string;
            goodsVideo: string;
            recommend: boolean;
            salesModel: string;
            goodsType: string;
        }[];
        current: number;
        pages: number;
        size: number;
    };
}>;
export interface GetManagerGoodsGoodsSkuListParams {
    goodsSearchParams: GoodsSearchParams;
}
