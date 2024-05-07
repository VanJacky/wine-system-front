export interface ProducingArea {
    /** 缩略名 */
    producerName?: string;
    /** 省份 */
    province?: string;
    /** 地级市 */
    city?: string;
    /** 层级 */
    level?: number;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    rank?: number;
}
