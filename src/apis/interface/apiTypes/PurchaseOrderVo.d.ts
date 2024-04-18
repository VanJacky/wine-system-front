import { type PurchaseQuoted, type PurchaseOrderItem, type PurchaseQuotedVo } from "../../interface";
export interface PurchaseOrderVo {
    /** 标题 */
    title?: string;
    /** 截止时间 */
    deadline?: string;
    /** 收货时间 */
    receiptTime?: string;
    /** 价格类型 可议价、不可议价、面议 */
    priceMethod?: string;
    /** 地址名称， '，'分割 */
    consigneeAddressPath?: string;
    /** 地址id，'，'分割 */
    consigneeAddressIdPath?: string;
    /** 是否需要发票 */
    needReceipt?: boolean;
    /** 补充说明 */
    supplement?: string;
    /** 联系类型联系方式什么时候可见 公开后、公开 */
    contactType?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 供求人 */
    memberId?: string;
    /** 状态，开启：OPEN，关闭：CLOSE */
    status?: string;
    /** 分类ID */
    categoryId?: string;
    /** 分类名称 */
    categoryName?: string;
    children?: PurchaseQuoted[];
    purchaseOrderItems?: PurchaseOrderItem[];
    quotedVOList?: PurchaseQuotedVo[];
}
