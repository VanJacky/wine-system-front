import { type AxiosRequestConfig } from "axios";
/**
 * /manager/goods/goods/get/{id}
 */
export declare function getManagerGoodsGoodsGetById(params: GetManagerGoodsGoodsGetByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
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
        categoryName: string[];
        goodsParamsDTOList: {
            groupId: string;
            groupName: string;
            goodsParamsItemDTOList: {
                paramId: string;
                paramName: string;
                paramValue: string;
                isIndex: number;
                required: number;
                sort: number;
            }[];
        }[];
        goodsGalleryList: string[];
        skuList: {
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
            specList: {
                specName: string;
                specValue: string;
                specType: number;
                specImage: {
                    url: string;
                    name: string;
                    status: string;
                }[];
            }[];
            goodsGalleryList: string[];
        }[];
        wholesaleList: {
            goodsId: string;
            skuId: string;
            templateId: string;
            num: number;
            price: number;
        }[];
    };
}>;
export interface GetManagerGoodsGoodsGetByIdParams {
    id: string;
}
