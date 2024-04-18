import { type ProducingArea } from "../../interface";
export interface IPageProducingArea {
    total?: number;
    records?: ProducingArea[];
    current?: number;
    pages?: number;
    size?: number;
}
