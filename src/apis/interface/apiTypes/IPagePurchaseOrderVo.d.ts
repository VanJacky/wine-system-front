import { type PurchaseOrderVo } from "../../interface";
export interface IPagePurchaseOrderVo {
    total?: number;
    records?: PurchaseOrderVo[];
    current?: number;
    pages?: number;
    size?: number;
}
