import { type GoodsVo } from "../../interface";
export interface ResultMessageGoodsVo {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: GoodsVo;
}
