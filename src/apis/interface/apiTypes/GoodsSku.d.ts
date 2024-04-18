export interface GoodsSku {
    /** 商品id */
    goodsId?: string;
    /** 规格信息 */
    simpleSpecs?: string;
    /** 配送模版id */
    freightTemplateId?: string;
    /** 是否是促销商品 */
    promotionFlag?: boolean;
    /** 促销价 */
    promotionPrice?: number;
    /** 商品名称 */
    goodsName?: string;
    /** 商品编号 */
    sn?: string;
    /** 品牌id */
    brandId?: string;
    /** 分类path */
    categoryPath?: string;
    /** 计量单位 */
    goodsUnit?: string;
    /** 卖点 */
    sellingPoint?: string;
    /** 重量 */
    weight?: number;
    /** 上架状态 */
    marketEnable?: string;
    /** 商品详情 */
    intro?: string;
    /** 商品价格 */
    price?: number;
    /** 成本价格 */
    cost?: number;
    /** 浏览数量 */
    viewCount?: number;
    /** 购买数量 */
    buyCount?: number;
    /** 库存 */
    quantity?: number;
    /** 商品好评率 */
    grade?: number;
    /** 缩略图路径 */
    thumbnail?: string;
    /** 大图路径 */
    big?: string;
    /** 小图路径 */
    small?: string;
    /** 原图路径 */
    original?: string;
    /** 店铺分类id */
    storeCategoryPath?: string;
    /** 评论数量 */
    commentNum?: number;
    /** 卖家id */
    storeId?: string;
    /** 卖家名字 */
    storeName?: string;
    /** 运费模板id */
    templateId?: string;
    /** 审核状态 */
    authFlag?: string;
    /** 审核信息 */
    authMessage?: string;
    /** 下架原因 */
    underMessage?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 商品移动端详情 */
    mobileIntro?: string;
    /** 商品视频 */
    goodsVideo?: string;
    /** 是否为推荐商品 */
    recommend: boolean;
    /** 销售模式 */
    salesModel: string;
    /** 商品类型 */
    goodsType: string;
}
