import { type Goods } from "../../interface";
export interface IPageGoods {
    total?: number;
    size?: number;
    records?: Goods[];
    current?: number;
    pages?: number;
}
