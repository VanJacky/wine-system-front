import { type OrderSimpleVo } from "../../interface";
export interface IPageOrderSimpleVo {
    total?: number;
    records?: OrderSimpleVo[];
    current?: number;
    pages?: number;
    size?: number;
}
