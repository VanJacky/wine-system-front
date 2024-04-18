import { type GoodsSku } from "../../interface";
export interface IPageGoodsSku {
    total?: number;
    size?: number;
    records?: GoodsSku[];
    current?: number;
    pages?: number;
}
