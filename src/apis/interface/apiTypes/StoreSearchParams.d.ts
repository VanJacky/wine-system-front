export interface StoreSearchParams {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
    /** 会员名称 */
    memberName?: string;
    /** 店铺名称 */
    storeName?: string;
    /** 店铺状态 */
    storeDisable?: string;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
}
