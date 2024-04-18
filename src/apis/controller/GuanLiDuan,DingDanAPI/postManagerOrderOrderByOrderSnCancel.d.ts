import { type AxiosRequestConfig } from "axios";
/**
 * /manager/order/order/{orderSn}/cancel
 */
export declare function postManagerOrderOrderByOrderSnCancel(params: PostManagerOrderOrderByOrderSnCancelParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
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
}>;
export interface PostManagerOrderOrderByOrderSnCancelParams {
    orderSn: string;
    reason: string;
}
