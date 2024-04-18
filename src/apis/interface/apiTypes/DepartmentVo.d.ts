export interface DepartmentVo {
    /** 部门名称 */
    title: string;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    sortOrder?: number;
    children?: DepartmentVo[];
}
