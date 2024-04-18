export interface RoleMenu {
    /** 角色id */
    roleId?: string;
    /** 菜单 */
    menuId?: string;
    /** 是否拥有操作数据权限，为否则只有查看权限 */
    isSuper?: boolean;
}
