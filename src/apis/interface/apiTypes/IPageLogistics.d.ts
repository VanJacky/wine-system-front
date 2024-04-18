import { type Logistics } from "../../interface";
export interface IPageLogistics {
    total?: number;
    size?: number;
    records?: Logistics[];
    current?: number;
    pages?: number;
}
