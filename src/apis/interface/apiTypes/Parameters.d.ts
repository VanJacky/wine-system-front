export interface Parameters {
    /** 参数名称 */
    paramName: string;
    /** 选择值 */
    options: string;
    /** 是否可索引，0 不显示 1 显示 */
    isIndex: number;
    /** 是否必填是  1    否   0 */
    required: number;
    /** 参数分组id */
    groupId: string;
}
