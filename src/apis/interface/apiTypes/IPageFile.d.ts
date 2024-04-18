import { type File } from "../../interface";
export interface IPageFile {
    total?: number;
    records?: File[];
    current?: number;
    pages?: number;
    size?: number;
}
