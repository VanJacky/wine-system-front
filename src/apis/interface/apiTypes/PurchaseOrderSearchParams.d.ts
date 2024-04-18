export interface PurchaseOrderSearchParams {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
    /** 会员ID */
    memberId?: string;
    /** 分类ID */
    categoryId?: string;
    /** 状态，开启：OPEN，关闭：CLOSE */
    status?: string;
    /** 分类 idList */
    categoryIdList?: string[];
}
