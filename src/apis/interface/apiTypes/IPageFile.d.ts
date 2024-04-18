import { type File } from "../../interface";
export interface IPageFile {
    total?: number;
    size?: number;
    records?: File[];
    current?: number;
    pages?: number;
}
