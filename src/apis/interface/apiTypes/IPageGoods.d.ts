import { type Goods } from "../../interface";
export interface IPageGoods {
    total?: number;
    records?: Goods[];
    current?: number;
    pages?: number;
    size?: number;
}
