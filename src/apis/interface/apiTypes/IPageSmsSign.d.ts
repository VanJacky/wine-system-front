import { type SmsSign } from "../../interface";
export interface IPageSmsSign {
    total?: number;
    size?: number;
    records?: SmsSign[];
    current?: number;
    pages?: number;
}
