import { type IPageGoodsUnit } from "../../interface";
export interface ResultMessageIPageGoodsUnit {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageGoodsUnit;
}
