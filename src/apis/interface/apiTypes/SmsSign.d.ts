export interface SmsSign {
    /** 签名名称 */
    signName: string;
    /** 签名来源 */
    signSource: number;
    /** 短信签名申请说明 */
    remark: string;
    /** 营业执照 */
    businessLicense: string;
    /** 授权委托书 */
    license: string;
    /** 签名审核状态 */
    signStatus?: number;
    /** 审核备注 */
    reason?: string;
}
