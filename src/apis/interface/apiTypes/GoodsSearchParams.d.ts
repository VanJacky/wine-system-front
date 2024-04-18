export interface GoodsSearchParams {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
    /** 商品编号 */
    goodsId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 商品编号 */
    id?: string;
    /** 商家ID */
    storeId?: string;
    /** 卖家名字 */
    storeName?: string;
    /** 价格,可以为范围，如10_1000 */
    price?: string;
    /** 分类path */
    categoryPath?: string;
    /** 店铺分类id */
    storeCategoryPath?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 上下架状态 */
    marketEnable?: string;
    /** 审核状态 */
    authFlag?: string;
    /** 库存数量 */
    leQuantity?: number;
    /** 库存数量 */
    geQuantity?: number;
    /** 是否为推荐商品 */
    recommend?: boolean;
    /** brandId */
    brandId?: string;
    /** 商品类型 */
    goodsType?: string;
    /** 销售模式 */
    salesModel: string;
}
