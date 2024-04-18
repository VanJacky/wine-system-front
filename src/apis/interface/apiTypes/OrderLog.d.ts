export interface OrderLog {
    /** 订单编号 */
    orderSn?: string;
    /** 操作者id(可以是卖家) */
    operatorId?: string;
    /** 操作者类型 */
    operatorType?: string;
    /** 操作者名称 */
    operatorName?: string;
    /** 日志信息 */
    message?: string;
}
