import { type AxiosRequestConfig } from "axios";
/**
 * /manager/order/order/{orderSn}
 */
export declare function getManagerOrderOrderByOrderSn(params: GetManagerOrderOrderByOrderSnParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        order: {
            sn: string;
            tradeSn: string;
            storeId: string;
            storeName: string;
            memberId: string;
            memberName: string;
            orderStatus: string;
            payStatus: string;
            deliverStatus: string;
            receivableNo: string;
            paymentMethod: string;
            paymentTime: string;
            consigneeName: string;
            consigneeMobile: string;
            deliveryMethod: string;
            consigneeAddressPath: string;
            consigneeAddressIdPath: string;
            consigneeDetail: string;
            flowPrice: number;
            goodsPrice: number;
            freightPrice: number;
            discountPrice: number;
            updatePrice: number;
            logisticsNo: string;
            logisticsCode: string;
            logisticsName: string;
            weight: number;
            goodsNum: number;
            remark: string;
            cancelReason: string;
            completeTime: string;
            logisticsTime: string;
            payOrderNo: string;
            clientType: string;
            needReceipt: boolean;
            parentOrderSn: string;
            promotionId: string;
            orderType: string;
            orderPromotionType: string;
            priceDetail: string;
            canReturn: boolean;
            verificationCode: string;
            distributionId: string;
            useStoreMemberCouponIds: string;
            usePlatformMemberCouponId: string;
            qrCode: string;
            storeAddressPath: string;
            storeAddressMobile: string;
            storeAddressCenter: string;
            purchaseOrderId: string;
            priceDetailDTO: {
                originalPrice: number;
                goodsPrice: number;
                freightPrice: number;
                payPoint: number;
                discountPrice: number;
                discountPriceDetail: {
                    promotionTypeEnum: "PINTUAN" | "SECKILL" | "COUPON" | "PLATFORM_COUPON" | "FULL_DISCOUNT" | "POINTS_GOODS" | "KANJIA" | "COUPON_ACTIVITY";
                    promotionId: string;
                    discountPrice: number;
                    goodsId: string;
                    skuId: string;
                    promotionName: string;
                }[];
                couponPrice: number;
                distributionCommission: number;
                platFormCommissionPoint: number;
                platFormCommission: number;
                siteCouponPrice: number;
                siteCouponPoint: number;
                siteCouponCommission: number;
                updatePrice: number;
                flowPrice: number;
                settlementPrice: number;
                billPrice: number;
                joinPromotion: {
                    promotionType: string;
                    activityId: string;
                }[];
                discountPriceItem: {
                    promotionTypeEnum: "PINTUAN" | "SECKILL" | "COUPON" | "PLATFORM_COUPON" | "FULL_DISCOUNT" | "POINTS_GOODS" | "KANJIA" | "COUPON_ACTIVITY";
                    promotionId: string;
                    discountPrice: number;
                    goodsId: string;
                    skuId: string;
                    promotionName: string;
                };
            };
        };
        unit: string;
        num: string;
        orderItems: {
            column: string;
            asc: boolean;
        }[];
        orderStatusValue: string;
        payStatusValue: string;
        deliverStatusValue: string;
        deliveryMethodValue: string;
        paymentMethodValue: string;
        receipt: {
            orderSn: string;
            receiptTitle: string;
            taxpayerId: string;
            receiptContent: string;
            receiptPrice: number;
            memberId: string;
            memberName: string;
            storeId: string;
            storeName: string;
            receiptStatus: number;
            receiptDetail: string;
        };
        orderLogs: {
            orderSn: string;
            operatorId: string;
            operatorType: string;
            operatorName: string;
            message: string;
        }[];
        priceDetail: string;
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
    };
}>;
export interface GetManagerOrderOrderByOrderSnParams {
    orderSn: string;
}
