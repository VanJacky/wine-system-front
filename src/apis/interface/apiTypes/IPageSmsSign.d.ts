import { type SmsSign } from "../../interface";
export interface IPageSmsSign {
    total?: number;
    records?: SmsSign[];
    current?: number;
    pages?: number;
    size?: number;
}
