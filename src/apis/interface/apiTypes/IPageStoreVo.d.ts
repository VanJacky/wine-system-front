import { type StoreVo } from "../../interface";
export interface IPageStoreVo {
    total?: number;
    size?: number;
    records?: StoreVo[];
    current?: number;
    pages?: number;
}
