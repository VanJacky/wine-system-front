export interface GoodsParamsItemDto {
    /** 参数ID */
    paramId?: string;
    /** 参数名字 */
    paramName?: string;
    /** 参数值 */
    paramValue?: string;
    /** 是否可索引，0 不索引 1 索引 */
    isIndex?: number;
    /** 是否必填，0 不显示 1 显示 */
    required?: number;
    /** 排序 */
    sort?: number;
}
