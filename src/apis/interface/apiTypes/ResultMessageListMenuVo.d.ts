import { type MenuVo } from "../../interface";
export interface ResultMessageListMenuVo {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: MenuVo[];
}
