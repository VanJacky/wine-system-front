import { type Brand } from "../../interface";
export interface IPageBrand {
    total?: number;
    records?: Brand[];
    current?: number;
    pages?: number;
    size?: number;
}
