export interface PurchaseOrderItem {
    /** 采购ID */
    purchaseOrderId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 数量 */
    num?: string;
    /** 数量单位 */
    goodsUnit?: string;
    /** 价格 */
    price?: number;
    /** 规格 */
    specs?: string;
    /** 图片 */
    images?: string;
    /** goodsId */
    goodsId?: string;
    /** skuId */
    skuId?: string;
}
