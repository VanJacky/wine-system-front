import { type Brand } from "../../interface";
export interface IPageBrand {
    total?: number;
    size?: number;
    records?: Brand[];
    current?: number;
    pages?: number;
}
