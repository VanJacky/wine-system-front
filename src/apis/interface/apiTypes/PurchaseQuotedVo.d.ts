import { type PurchaseQuotedItem } from "../../interface";
export interface PurchaseQuotedVo {
    /** 采购单ID */
    purchaseOrderId?: string;
    /** 标题 */
    title?: string;
    /** 报价说明 */
    context?: string;
    /** 附件 */
    annex?: string;
    /** 公司名称 */
    companyName?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 报价人 */
    memberId?: string;
    /** 排位 */
    rank?: string;
    /** 地址名称， '，'分割 */
    consigneeAddressPath?: string;
    /** 地址id，'，'分割 */
    consigneeAddressIdPath?: string;
    /** 单位 */
    unit?: string;
    purchaseQuotedItems?: PurchaseQuotedItem[];
}
