import { type GoodsParamsDto, type GoodsSkuVo, type Wholesale } from "../../interface";
export interface GoodsVo {
    /** 商品名称 */
    goodsName: string;
    /** 商品价格 */
    price: number;
    /** 品牌id */
    brandId?: string;
    /** 产地id */
    producerId?: string;
    /** 产地缩略名 */
    producerName?: string;
    /** 分类path */
    categoryPath?: string;
    /** 计量单位 */
    goodsUnit?: string;
    /** 卖点 */
    sellingPoint?: string;
    /** 上架状态 */
    marketEnable?: string;
    /** 详情 */
    intro?: string;
    /** 购买数量 */
    buyCount?: number;
    /** 库存 */
    quantity?: number;
    /** 商品好评率 */
    grade?: number;
    /** 缩略图路径 */
    thumbnail?: string;
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
    /** 是否有多个sku */
    hasSkus?: boolean;
    /** skuId */
    skuId?: string;
    /** 商品移动端详情 */
    mobileIntro?: string;
    /** 商品视频 */
    goodsVideo?: string;
    /** 是否为推荐商品 */
    recommend?: boolean;
    /** 销售模式 */
    salesModel: string;
    /** 分账比例 */
    splitRatio?: number;
    /** skuList */
    skuLists?: string;
    /** 商品类型 */
    goodsType: string;
    /** 分类名称 */
    categoryName?: string[];
    /** 商品参数 */
    goodsParamsDTOList?: GoodsParamsDto[];
    /** 商品图片 */
    goodsGalleryList?: string[];
    /** sku列表 */
    skuList?: GoodsSkuVo[];
    /** 批发商品消费规则列表 */
    wholesaleList?: Wholesale[];
}
