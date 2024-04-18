export interface ManagerMemberEditDto {
    id: string;
    /** 会员用户名,用户名不能进行修改 */
    username: string;
    /** 会员密码 */
    password?: string;
    /** 昵称 */
    nickName?: string;
    /** 地区 */
    region?: string;
    /** 地区ID */
    regionId?: string;
    /** 会员性别,1为男，0为女 */
    sex: number;
    /** 会员生日 */
    birthday?: string;
    /** 会员头像 */
    face?: string;
}
