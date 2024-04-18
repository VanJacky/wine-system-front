export interface AdminUserDto {
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
    /** 头像 */
    avatar?: string;
    /** 描述/详情/备注 */
    description?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 是否为超级管理员 */
    isSuper?: boolean;
}
