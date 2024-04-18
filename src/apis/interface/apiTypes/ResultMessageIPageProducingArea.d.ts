import { type IPageProducingArea } from "../../interface";
export interface ResultMessageIPageProducingArea {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageProducingArea;
}
