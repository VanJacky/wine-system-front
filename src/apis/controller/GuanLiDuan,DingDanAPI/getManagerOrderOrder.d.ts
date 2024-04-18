import { type AxiosRequestConfig } from "axios";
import { type OrderSearchParams } from "../../interface";
/**
 * /manager/order/order
 */
export declare function getManagerOrderOrder(params: GetManagerOrderOrderParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        size: number;
        records: {
            sn: string;
            flowPrice: number;
            createTime: string;
            orderStatus: string;
            payStatus: string;
            paymentMethod: string;
            paymentTime: string;
            memberName: string;
            storeName: string;
            storeId: string;
            clientType: string;
            orderItems: {
                sn: string;
                goodsId: string;
                skuId: string;
                num: string;
                image: string;
                name: string;
                goodsPrice: number;
                afterSaleStatus: "NOT_APPLIED(未申请),ALREADY_APPLIED(已申请),EXPIRED(已失效不允许申请售后)";
                complainStatus: string;
                commentStatus: string;
            }[];
            orderType: string;
            deliverStatus: string;
            orderPromotionType: string;
            allowOperationVO: {
                cancel: boolean;
                pay: boolean;
                ship: boolean;
                rog: boolean;
                showLogistics: boolean;
                editConsignee: boolean;
                editPrice: boolean;
                take: boolean;
            };
        }[];
        current: number;
        pages: number;
    };
}>;
export interface GetManagerOrderOrderParams {
    orderSearchParams: OrderSearchParams;
}
