import { type PageDataListVo } from "../../interface";
export interface IPagePageDataListVo {
    total?: number;
    size?: number;
    records?: PageDataListVo[];
    current?: number;
    pages?: number;
}
