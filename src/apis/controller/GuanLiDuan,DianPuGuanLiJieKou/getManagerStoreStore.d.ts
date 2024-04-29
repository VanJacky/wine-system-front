import { type AxiosRequestConfig } from "axios";
import { type StoreSearchParams, type PageVo } from "../../interface";
/**
 * /manager/store/store
 */
export declare function getManagerStoreStore(params: GetManagerStoreStoreParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        records: {
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
            stockWarning: number;
            nickName: string;
        }[];
        current: number;
        pages: number;
        size: number;
    };
}>;
export interface GetManagerStoreStoreParams {
    entity: StoreSearchParams;
    page: PageVo;
}
