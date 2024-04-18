export interface Logistics {
    /** 物流公司名称 */
    name: string;
    /** 物流公司code */
    code: string;
    /** 支持电子面单 */
    standBy?: string;
    /** 物流公司电子面单表单 */
    formItems?: string;
    /** 禁用状态 OPEN：开启，CLOSE：禁用 */
    disabled?: string;
}
