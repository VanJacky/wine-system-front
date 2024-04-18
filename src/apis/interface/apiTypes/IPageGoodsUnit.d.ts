import { type GoodsUnit } from "../../interface";
export interface IPageGoodsUnit {
    total?: number;
    size?: number;
    records?: GoodsUnit[];
    current?: number;
    pages?: number;
}
