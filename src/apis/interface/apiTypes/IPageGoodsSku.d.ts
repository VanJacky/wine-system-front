import { type GoodsSku } from "../../interface";
export interface IPageGoodsSku {
    total?: number;
    records?: GoodsSku[];
    current?: number;
    pages?: number;
    size?: number;
}
