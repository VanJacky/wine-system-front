export interface PurchaseOrderItem {
    /** 采购ID */
    purchaseOrderId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 采购数量 */
    num?: string;
    /** 每箱个数 */
    goodsUnit?: string;
    /** 单位 */
    unit?: string;
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
