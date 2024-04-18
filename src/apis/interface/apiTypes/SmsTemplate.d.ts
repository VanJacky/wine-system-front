export interface SmsTemplate {
    /** 模板名称 */
    templateName?: string;
    /** 短信类型 */
    templateType?: number;
    /** 短信模板申请说明 */
    remark?: string;
    /** 模板内容 */
    templateContent?: string;
    /** 模板审核状态 */
    templateStatus?: number;
    /** 短信模板CODE */
    templateCode?: string;
    /** 审核备注 */
    reason?: string;
}
