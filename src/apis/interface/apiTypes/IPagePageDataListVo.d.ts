import { type PageDataListVo } from "../../interface";
export interface IPagePageDataListVo {
    total?: number;
    records?: PageDataListVo[];
    current?: number;
    pages?: number;
    size?: number;
}
