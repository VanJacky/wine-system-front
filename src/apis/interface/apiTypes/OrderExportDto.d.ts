export interface OrderExportDto {
    /** 订单编号 */
    sn?: string;
    /** 创建时间 */
    createTime?: string;
    /** 用户名 */
    memberName?: string;
    /** 收件人姓名 */
    consigneeName?: string;
    /** 收件人手机 */
    consigneeMobile?: string;
    /** 收件人地址 */
    consigneeAddressPath?: string;
    /** 详细地址 */
    consigneeDetail?: string;
    /** 支付方式 */
    paymentMethod?: string;
    /** 物流公司名称 */
    logisticsName?: string;
    /** 运费 */
    freightPrice?: number;
    /** 商品价格 */
    goodsPrice?: number;
    /** 优惠的金额 */
    discountPrice?: number;
    /** 总价格 */
    flowPrice?: number;
    /** 商品名称 */
    goodsName?: string;
    /** 商品数量 */
    num?: number;
    /** 买家订单备注 */
    remark?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 付款状态 */
    payStatus?: string;
    /** 货运状态 */
    deliverStatus?: string;
    /** 是否需要发票 */
    needReceipt?: boolean;
    /** 店铺名称 */
    storeName?: string;
}
