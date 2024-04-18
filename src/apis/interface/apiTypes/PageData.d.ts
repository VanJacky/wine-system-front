export interface PageData {
    /** 页面名称 */
    name?: string;
    /** 页面数据 */
    pageData?: string;
    /** 页面开关状态 */
    pageShow?: 'OPEN,CLOSE';
    /** 页面类型 */
    pageType?: 'INDEX,STORE,SPECIAL';
    /** 客户端类型 */
    pageClientType?: 'PC,H5,WECHAT_MP,APP';
    /** 值 */
    num?: string;
}
