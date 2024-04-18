export interface MemberAddressDto {
    /** 收货人姓名 */
    consigneeName: string;
    /** 手机号码 */
    consigneeMobile?: string;
    /** 地址名称， '，'分割 */
    consigneeAddressPath: string;
    /** 地址id，'，'分割 */
    consigneeAddressIdPath: string;
    /** 详细地址 */
    consigneeDetail: string;
}
