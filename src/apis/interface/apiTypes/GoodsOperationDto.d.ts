import { type GoodsParamsDto, type WholesaleDto } from "../../interface";
export interface GoodsOperationDto {
    /** true */
    goodsId?: string;
    /** 商品价格 */
    price: number;
    /** 分账比例 */
    splitRatio: number;
    /** 分类path */
    categoryPath?: string;
    /** 店铺分类id */
    storeCategoryPath: string;
    /** 品牌id */
    brandId: string;
    /** 产地id */
    producerId: string;
    /** 商品名称 */
    goodsName: string;
    /** 详情 */
    intro?: string;
    /** 商品移动端详情 */
    mobileIntro?: string;
    /** 库存 */
    quantity?: number;
    /** 是否立即发布 */
    release?: boolean;
    /** 是否是推荐商品 */
    recommend?: boolean;
    /** 商品参数 */
    goodsParamsDTOList?: GoodsParamsDto[];
    /** 商品图片 */
    goodsGalleryList?: string[];
    /** 运费模板id,不需要运费模板时值是0 */
    templateId: string;
    /** 卖点 */
    sellingPoint?: string;
    /** 销售模式 */
    salesModel: string;
    /** 销售模式 */
    goodsUnit: string;
    /** 商品描述 */
    info?: string;
    /** 是否重新生成sku数据 */
    regeneratorSkuFlag?: boolean;
    /** 商品类型 */
    goodsType?: string;
    /** 商品视频 */
    goodsVideo?: string;
    /** sku列表 */
    skuList?: GoodsOperationDtoSkuList[];
    /** 是否为商品模版 */
    goodsTemplateFlag?: boolean;
    /** 批发商品规则 */
    wholesaleList?: WholesaleDto[];
    /** 注意事项 */
    needingAttention?: string;
    /** 是否为年度会员专属 */
    annualFeeExclusive?: boolean;
    /** 浏览权限 */
    browsePermissions?: string;
}
export interface GoodsOperationDtoSkuList {
    [key: string]: any;
}
