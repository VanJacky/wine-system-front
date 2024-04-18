export interface OrderItemVo {
    /** 编号 */
    sn?: string;
    /** 商品ID */
    goodsId?: string;
    /** 货品ID */
    skuId?: string;
    /** 销售量 */
    num?: string;
    /** 图片 */
    image?: string;
    /** 商品名称 */
    name?: string;
    goodsPrice?: number;
    /** 售后状态 */
    afterSaleStatus?: 'NOT_APPLIED(未申请),ALREADY_APPLIED(已申请),EXPIRED(已失效不允许申请售后)';
    /** 投诉状态 */
    complainStatus?: string;
    /** 评论状态:未评论(UNFINISHED),待追评(WAIT_CHASE),评论完成(FINISHED)， */
    commentStatus?: string;
}
