export interface Menu {
    /** 菜单标题 */
    title?: string;
    /** 路由名称 */
    name?: string;
    /** 路径 */
    path?: string;
    /** 菜单层级 */
    level?: number;
    /** 前端目录文件 */
    frontRoute?: string;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    sortOrder?: number;
    /** 权限URL，*号模糊匹配，逗号分割 */
    permission?: string;
}
