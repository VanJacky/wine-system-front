export interface MemberAddDto {
    /** 会员用户名 */
    username: string;
    /** 会员密码 */
    password?: string;
    /** 手机号码 */
    mobile: string;
}
