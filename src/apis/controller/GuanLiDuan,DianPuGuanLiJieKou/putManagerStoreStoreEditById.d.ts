import { type AxiosRequestConfig } from "axios";
import { type StoreEditDto } from "../../interface";
/**
 * /manager/store/store/edit/{id}
 */
export declare function putManagerStoreStoreEditById(params: PutManagerStoreStoreEditByIdParams, input?: StoreEditDto, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        memberId: string;
        memberName: string;
        storeName: string;
        storeJson: string;
        storeEndTime: string;
        storeDisable: string;
        selfOperated: boolean;
        storeLogo: string;
        storeCenter: string;
        storeDesc: string;
        storeAddressPath: string;
        storeAddressIdPath: string;
        storeAddressDetail: string;
        descriptionScore: number;
        serviceScore: number;
        deliveryScore: number;
        goodsNum: number;
        collectionNum: number;
        yzfSign: string;
        yzfMpSign: string;
        merchantEuid: string;
        monthSales: string;
        type: "MIDDLEMAN" | "MANUFACTURERS";
        discountedPrice: string;
        originalPrice: string;
        pageShow: boolean;
        selfPickFlag: boolean;
    };
}>;
export interface PutManagerStoreStoreEditByIdParams {
    id: string;
}
