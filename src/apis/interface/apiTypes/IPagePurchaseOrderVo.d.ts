import { type PurchaseOrderVo } from "../../interface";
export interface IPagePurchaseOrderVo {
    total?: number;
    size?: number;
    records?: PurchaseOrderVo[];
    current?: number;
    pages?: number;
}
