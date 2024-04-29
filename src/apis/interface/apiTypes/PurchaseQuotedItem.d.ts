export interface PurchaseQuotedItem {
    /** goodsId */
    goodsId?: string;
    /** skuId */
    skuId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 规格 */
    specs?: string;
    /** 数量 */
    num?: string;
    /** 数量单位 */
    goodsUnit?: string;
    /** 价格 */
    price?: number;
    /** wineTime */
    wineTime?: string;
    /** 是否赠品 */
    giftFlag?: boolean;
    purchaseQuotedId?: string;
}
