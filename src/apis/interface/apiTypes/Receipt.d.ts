export interface Receipt {
    /** 订单编号 */
    orderSn?: string;
    /** 发票抬头 */
    receiptTitle?: string;
    /** 纳税人识别号 */
    taxpayerId?: string;
    /** 发票内容 */
    receiptContent?: string;
    /** 发票金额 */
    receiptPrice?: number;
    /** 会员ID */
    memberId?: string;
    /** 会员名称 */
    memberName?: string;
    /** 商家ID */
    storeId?: string;
    /** 商家名称 */
    storeName?: string;
    /** 发票状态 0未开 1已开 */
    receiptStatus?: number;
    /** 发票详情 */
    receiptDetail?: string;
}
