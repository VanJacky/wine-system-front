export interface OrderSearchParams {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
    /** 商品名称 */
    goodsName?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 页面标签 */
    tag?: string;
    /** 商家ID */
    storeId?: string;
    /** 会员ID */
    memberId?: string;
    /** 收货人 */
    shipName?: string;
    /** 买家昵称 */
    buyerName?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 付款状态 */
    payStatus?: string;
    /** 关键字 商品名称/买家名称/店铺名称 */
    keywords?: string;
    /** 付款方式 */
    paymentType?: string;
    /** 订单类型 */
    orderType?: 'NORMAL,VIRTUAL,GIFT,PINTUAN,POINT';
    /** 支付方式 */
    paymentMethod?: string;
    /** 支付时间 */
    paymentTime?: string;
    /** 下单开始时间 */
    startDate?: string;
    /** 下单结束时间 */
    endDate?: string;
    /** 订单来源 */
    clientType?: string;
    /** 评论状态:未评论(UNFINISHED),待追评(WAIT_CHASE),评论完成(FINISHED)， */
    commentStatus?: string;
    /** 是否为其他订单下的订单，如果是则为依赖订单的sn，否则为空 */
    parentOrderSn?: string;
    /** 是否为某订单类型的订单，如果是则为订单类型的id，否则为空 */
    promotionId?: string;
    /** 总价格,可以为范围，如10_1000 */
    flowPrice?: string;
    /** 订单促销类型 */
    orderPromotionType?: string;
}
