import { type SmsTemplate } from "../../interface";
export interface IPageSmsTemplate {
    total?: number;
    records?: SmsTemplate[];
    current?: number;
    pages?: number;
    size?: number;
}
