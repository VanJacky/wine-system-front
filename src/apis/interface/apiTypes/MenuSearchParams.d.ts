export interface MenuSearchParams {
    /** 菜单/权限名称 */
    name?: string;
    /** 层级 */
    level?: number;
    /** 菜单标题 */
    title?: string;
    /** 赋权API地址,正则表达式 */
    path?: string;
    /** 前端路由 */
    frontRoute?: string;
    /** 图标 */
    icon?: string;
}
