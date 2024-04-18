import { type ProducingArea } from "../../interface";
export interface IPageProducingArea {
    total?: number;
    size?: number;
    records?: ProducingArea[];
    current?: number;
    pages?: number;
}
