export interface Store {
    /** 会员Id */
    memberId?: string;
    /** 会员名称 */
    memberName?: string;
    /** 店铺名称 */
    storeName?: string;
    /** storeJson */
    storeJson?: string;
    /** 店铺关闭时间 */
    storeEndTime?: string;
    /** 店铺状态 */
    storeDisable?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 店铺logo */
    storeLogo?: string;
    /** 经纬度 */
    storeCenter: string;
    /** 店铺简介 */
    storeDesc: string;
    /** 地址名称， '，'分割 */
    storeAddressPath?: string;
    /** 地址id，'，'分割 */
    storeAddressIdPath?: string;
    /** 详细地址 */
    storeAddressDetail?: string;
    /** 描述评分 */
    descriptionScore?: number;
    /** 服务评分 */
    serviceScore?: number;
    /** 物流评分 */
    deliveryScore?: number;
    /** 商品数量 */
    goodsNum?: number;
    /** 收藏数量 */
    collectionNum?: number;
    /** 腾讯云智服唯一标识 */
    yzfSign?: string;
    /** 腾讯云智服小程序唯一标识 */
    yzfMpSign?: string;
    /** udesk IM标识 */
    merchantEuid?: string;
    /** monthSales */
    monthSales?: string;
    /** type */
    type?: string;
    /** discountedPrice */
    discountedPrice?: string;
    /** originalPrice */
    originalPrice?: string;
    /** 默认页面是否开启 */
    pageShow?: boolean;
    /** 是否开启自提 */
    selfPickFlag?: boolean;
}
