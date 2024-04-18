import { type StoreVo } from "../../interface";
export interface IPageStoreVo {
    total?: number;
    records?: StoreVo[];
    current?: number;
    pages?: number;
    size?: number;
}
