import { type AxiosRequestConfig } from "axios";
import { type GoodsOperationDto } from "../../interface";
/**
 * /manager/goods/goods/update/{goodsId}
 */
export declare function putManagerGoodsGoodsUpdateByGoodsId(params: PutManagerGoodsGoodsUpdateByGoodsIdParams, input: GoodsOperationDto, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        goodsId: string;
        price: number;
        splitRatio: number;
        categoryPath: string;
        storeCategoryPath: string;
        brandId: string;
        producerId: string;
        goodsName: string;
        intro: string;
        mobileIntro: string;
        quantity: number;
        release: boolean;
        recommend: boolean;
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
        templateId: string;
        sellingPoint: string;
        salesModel: string;
        goodsUnit: string;
        info: string;
        regeneratorSkuFlag: boolean;
        goodsType: string;
        goodsVideo: string;
        skuList: {
            [x: string]: any;
        }[];
        goodsTemplateFlag: boolean;
        wholesaleList: {
            goodsId: string;
            skuId: string;
            templateId: string;
            num: number;
            price: number;
        }[];
        needingAttention: string;
        annualFeeExclusive: boolean;
        browsePermissions: string;
    };
}>;
export interface PutManagerGoodsGoodsUpdateByGoodsIdParams {
    goodsId: string;
}
