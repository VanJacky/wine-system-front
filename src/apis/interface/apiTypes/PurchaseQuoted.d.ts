export interface PurchaseQuoted {
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
}
