import { type GoodsUnit } from "../../interface";
export interface IPageGoodsUnit {
    total?: number;
    records?: GoodsUnit[];
    current?: number;
    pages?: number;
    size?: number;
}
