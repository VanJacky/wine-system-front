import { type OrderItemVo, type AllowOperation } from "../../interface";
export interface OrderSimpleVo {
    /** sn */
    sn?: string;
    /** 总价格 */
    flowPrice?: number;
    /** 创建时间 */
    createTime?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 付款状态 */
    payStatus?: string;
    /** 支付方式 */
    paymentMethod?: string;
    /** 支付时间 */
    paymentTime?: string;
    /** 用户名 */
    memberName?: string;
    /** 店铺名称 */
    storeName?: string;
    /** 店铺ID */
    storeId?: string;
    /** 订单来源 */
    clientType?: string;
    orderItems?: OrderItemVo[];
    /** 订单类型 */
    orderType?: string;
    /** 货运状态 */
    deliverStatus?: string;
    /** 订单促销类型 */
    orderPromotionType?: string;
    allowOperationVO?: AllowOperation;
}
