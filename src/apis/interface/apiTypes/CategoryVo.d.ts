import { type CategoryBrandVo } from "../../interface";
export interface CategoryVo {
    /** 分类名称 */
    name: string;
    /** 父id, 根节点为0 */
    parentId: string;
    /** 层级, 从0开始 */
    level: number;
    /** 排序值 */
    rank: number;
    /** 佣金比例 */
    commissionRate?: number;
    /** 分类图标 */
    image?: string;
    /** 是否支持频道 */
    supportChannel?: boolean;
    /** 父节点名称 */
    parentTitle?: string;
    /** 子分类列表 */
    children?: CategoryVo[];
    /** 分类关联的品牌列表 */
    brandList?: CategoryBrandVo[];
}
