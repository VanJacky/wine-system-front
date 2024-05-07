export interface Category {
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
}
