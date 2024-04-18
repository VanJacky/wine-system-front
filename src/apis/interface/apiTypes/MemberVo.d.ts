export interface MemberVo {
    /** 会员用户名 */
    username?: string;
    /** 昵称 */
    nickName?: string;
    /** 会员性别,1为男，0为女 */
    sex?: number;
    /** 会员生日 */
    birthday?: string;
    /** 会员地址ID */
    regionId?: string;
    /** 会员地址 */
    region?: string;
    /** 手机号码 */
    mobile: string;
    /** 积分数量 */
    point?: number;
    /** 积分总数量 */
    totalPoint?: number;
    /** 会员头像 */
    face?: string;
    /** 会员状态 */
    disabled?: boolean;
    /** 是否开通店铺 */
    haveStore?: boolean;
    /** 店铺ID */
    storeId?: string;
    /** openId */
    openId?: string;
    /** 客户端 */
    clientEnum?: string;
    /** 最后一次登录时间 */
    lastLoginDate?: string;
    /** 会员等级ID */
    gradeId?: string;
    /** 经验值数量 */
    experience?: number;
}
