export interface StoreEditDto {
    /** tradeId */
    tradeId?: string;
    /** guarantees_price */
    guaranteesPrice?: string;
    /** 店铺id */
    storeId: string;
    /** storeJson */
    storeJson?: string;
    /** type */
    type?: string;
    /** 店铺名称 */
    storeName: string;
    /** 公司名称 */
    companyName: string;
    /** 公司地址 */
    companyAddress: string;
    /** 公司地址地区Id */
    companyAddressIdPath?: string;
    /** 公司地址地区 */
    companyAddressPath?: string;
    /** 公司电话 */
    companyPhone?: string;
    /** 电子邮箱 */
    companyEmail?: string;
    /** 员工总数 */
    employeeNum?: number;
    /** 注册资金 */
    registeredCapital?: number;
    /** 联系人姓名 */
    linkName: string;
    /** 联系人电话 */
    linkPhone: string;
    /** 营业执照号 */
    licenseNum?: string;
    /** 法定经营范围 */
    scope?: string;
    /** 营业执照电子版 */
    licencePhoto: string;
    /** 法人姓名 */
    legalName: string;
    /** 法人身份证 */
    legalId: string;
    /** 法人身份证照片 */
    legalPhoto: string;
    /** 结算银行开户行名称 */
    settlementBankAccountName: string;
    /** 结算银行开户账号 */
    settlementBankAccountNum: string;
    /** 结算银行开户支行名称 */
    settlementBankBranchName: string;
    /** 结算银行支行联行号 */
    settlementBankJointName: string;
    /** 店铺经营类目 */
    goodsManagementCategory: string;
    /** 结算周期 */
    settlementCycle?: string;
    /** 库存预警数量 */
    stockWarning?: number;
    /** 同城配送达达店铺编码 */
    ddCode?: string;
    /** 收货人姓名 */
    salesConsigneeName?: string;
    /** 收件人手机 */
    salesConsigneeMobile?: string;
    /** 地址Id， '，'分割 */
    salesConsigneeAddressId?: string;
    /** 地址名称， '，'分割 */
    salesConsigneeAddressPath?: string;
    /** 详细地址 */
    salesConsigneeDetail?: string;
    /** 店铺状态 */
    storeDisable?: string;
    /** 是否自营 */
    selfOperated: boolean;
    /** 经纬度 */
    storeCenter?: string;
    /** 店铺logo */
    storeLogo?: string;
    /** 店铺简介 */
    storeDesc: string;
    /** 地址名称， '，'分割 */
    storeAddressPath?: string;
    /** 地址id，'，'分割 */
    storeAddressIdPath?: string;
    /** 详细地址 */
    storeAddressDetail?: string;
    /** 腾讯云智服唯一标识 */
    yzfSign?: string;
    /** 腾讯云智服小程序唯一标识 */
    yzfMpSign?: string;
}
