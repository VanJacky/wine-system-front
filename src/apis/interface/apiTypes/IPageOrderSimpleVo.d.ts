import { type OrderSimpleVo } from "../../interface";
export interface IPageOrderSimpleVo {
    total?: number;
    size?: number;
    records?: OrderSimpleVo[];
    current?: number;
    pages?: number;
}
