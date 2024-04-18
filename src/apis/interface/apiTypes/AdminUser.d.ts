export interface AdminUser {
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 昵称 */
    nickName?: string;
    /** 手机 */
    mobile?: string;
    /** 邮件 */
    email?: string;
    /** 用户头像 */
    avatar?: string;
    /** 是否是超级管理员 超级管理员/普通管理员 */
    isSuper?: boolean;
    /** 状态 默认true正常 false禁用 */
    status?: boolean;
    /** 描述/详情/备注 */
    description?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 角色id集合 */
    roleIds?: string;
}
