import { type PriceDetailDto } from "../../interface";
export interface Order {
    /** 订单编号 */
    sn?: string;
    /** 交易编号 关联Trade */
    tradeSn?: string;
    /** 店铺ID */
    storeId?: string;
    /** 店铺名称 */
    storeName?: string;
    /** 会员ID */
    memberId?: string;
    /** 用户名 */
    memberName?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 付款状态 */
    payStatus?: string;
    /** 货运状态 */
    deliverStatus?: string;
    /** 第三方付款流水号 */
    receivableNo?: string;
    /** 支付方式 */
    paymentMethod?: string;
    /** 支付时间 */
    paymentTime?: string;
    /** 收件人姓名 */
    consigneeName?: string;
    /** 收件人手机 */
    consigneeMobile?: string;
    /** 配送方式 */
    deliveryMethod?: string;
    /** 地址名称， '，'分割 */
    consigneeAddressPath?: string;
    /** 地址id，'，'分割 */
    consigneeAddressIdPath?: string;
    /** 详细地址 */
    consigneeDetail?: string;
    /** 总价格 */
    flowPrice?: number;
    /** 商品价格 */
    goodsPrice?: number;
    /** 运费 */
    freightPrice?: number;
    /** 优惠的金额 */
    discountPrice?: number;
    /** 修改价格 */
    updatePrice?: number;
    /** 发货单号 */
    logisticsNo?: string;
    /** 物流公司CODE */
    logisticsCode?: string;
    /** 物流公司名称 */
    logisticsName?: string;
    /** 订单商品总重量 */
    weight?: number;
    /** 商品数量 */
    goodsNum?: number;
    /** 买家订单备注 */
    remark?: string;
    /** 订单取消原因 */
    cancelReason?: string;
    /** 完成时间 */
    completeTime?: string;
    /** 送货时间 */
    logisticsTime?: string;
    /** 支付方式返回的交易号 */
    payOrderNo?: string;
    /** 订单来源 */
    clientType?: string;
    /** 是否需要发票 */
    needReceipt?: boolean;
    /** 是否为其他订单下的订单，如果是则为依赖订单的sn，否则为空 */
    parentOrderSn?: string;
    /** 是否为某订单类型的订单，如果是则为订单类型的id，否则为空 */
    promotionId?: string;
    /** 订单类型 */
    orderType?: string;
    /** 订单促销类型 */
    orderPromotionType?: string;
    /** 价格价格详情 */
    priceDetail?: string;
    /** 订单是否支持原路退回 */
    canReturn?: boolean;
    /** 提货码 */
    verificationCode?: string;
    /** 分销员ID */
    distributionId?: string;
    /** 使用的店铺会员优惠券id(,区分) */
    useStoreMemberCouponIds?: string;
    /** 使用的平台会员优惠券id */
    usePlatformMemberCouponId?: string;
    /** qrCode  实物为提货码  虚拟货物为账号 */
    qrCode?: string;
    /** 自提点地址 */
    storeAddressPath?: string;
    /** 自提点电话 */
    storeAddressMobile?: string;
    /** 自提点地址经纬度 */
    storeAddressCenter?: string;
    priceDetailDTO?: PriceDetailDto;
}
