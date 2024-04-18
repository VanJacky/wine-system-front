import { type DiscountPriceItem, type PromotionSkuVo } from "../../interface";
export interface PriceDetailDto {
    /** 订单原始总价格 */
    originalPrice?: number;
    /** 商品总金额（商品原价） */
    goodsPrice?: number;
    /** 配送费 */
    freightPrice?: number;
    /** 支付积分 */
    payPoint?: number;
    /** 优惠金额 */
    discountPrice?: number;
    /** 优惠详情 */
    discountPriceDetail?: DiscountPriceItem[];
    /** 优惠券金额 */
    couponPrice?: number;
    /** 单品分销返现支出 */
    distributionCommission?: number;
    /** 平台收取交易佣金比例 */
    platFormCommissionPoint?: number;
    /** 平台收取交易佣金=(flowPrice(流水金额) * platFormCommissionPoint(平台佣金比例))/100 */
    platFormCommission?: number;
    /** 平台优惠券 使用金额 */
    siteCouponPrice?: number;
    /** 站点优惠券佣金比例 */
    siteCouponPoint?: number;
    /** 站点优惠券佣金 */
    siteCouponCommission?: number;
    /** 订单修改金额 */
    updatePrice?: number;
    /** 流水金额(入账 出帐金额) = goodsPrice(商品总金额（商品原价）) + freightPrice(配送费) - discountPrice(优惠金额) - couponPrice(优惠券金额) + updatePrice(订单修改金额) */
    flowPrice?: number;
    /** 结算价格 与 商家/供应商 结算价格（例如积分商品/砍价商品） */
    settlementPrice?: number;
    /** 最终结算金额 = flowPrice(流水金额) - platFormCommission(平台收取交易佣金) - distributionCommission(单品分销返现支出) */
    billPrice?: number;
    /** 参与的促销活动 */
    joinPromotion?: PromotionSkuVo[];
    discountPriceItem?: DiscountPriceItem;
}
