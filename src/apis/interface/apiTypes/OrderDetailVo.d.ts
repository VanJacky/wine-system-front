import { type Order, type OrderItem, type Receipt, type OrderLog, type AllowOperation } from "../../interface";
export interface OrderDetailVo {
    order?: Order;
    orderItems?: OrderItem[];
    orderStatusValue?: string;
    payStatusValue?: string;
    deliverStatusValue?: string;
    deliveryMethodValue?: string;
    paymentMethodValue?: string;
    receipt?: Receipt;
    orderLogs?: OrderLog[];
    /** 价格详情 */
    priceDetail?: string;
    allowOperationVO?: AllowOperation;
}
