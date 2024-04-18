export interface DiscountPriceItem {
    /** 促销类型 */
    promotionTypeEnum?: 'PINTUAN' | 'SECKILL' | 'COUPON' | 'PLATFORM_COUPON' | 'FULL_DISCOUNT' | 'POINTS_GOODS' | 'KANJIA' | 'COUPON_ACTIVITY';
    /** 促销id */
    promotionId?: string;
    /** 减免金额 */
    discountPrice?: number;
    /** 涉及 商品ID */
    goodsId?: string;
    /** 涉及 SKU ID */
    skuId?: string;
    promotionName?: string;
}
