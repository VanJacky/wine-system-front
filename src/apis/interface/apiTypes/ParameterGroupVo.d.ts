import { type Parameters } from "../../interface";
export interface ParameterGroupVo {
    /** 参数组关联的参数集合 */
    params?: Parameters[];
    /** 参数组名称 */
    groupName?: string;
    /** 参数组id */
    groupId?: string;
}
