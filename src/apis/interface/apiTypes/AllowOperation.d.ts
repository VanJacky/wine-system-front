export interface AllowOperation {
    /** 可以取消 */
    cancel?: boolean;
    /** 可以支付 */
    pay?: boolean;
    /** 可以发货 */
    ship?: boolean;
    /** 可以收货 */
    rog?: boolean;
    /** 是否允许查看物流信息 */
    showLogistics?: boolean;
    /** 是否允许更改收货人信息 */
    editConsignee?: boolean;
    /** 是否允许更改价格 */
    editPrice?: boolean;
    /** 是否可以进行核销 */
    take?: boolean;
}
