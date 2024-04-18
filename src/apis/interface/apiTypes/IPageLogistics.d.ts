import { type Logistics } from "../../interface";
export interface IPageLogistics {
    total?: number;
    records?: Logistics[];
    current?: number;
    pages?: number;
    size?: number;
}
