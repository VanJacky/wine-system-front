import { type SmsTemplate } from "../../interface";
export interface IPageSmsTemplate {
    total?: number;
    size?: number;
    records?: SmsTemplate[];
    current?: number;
    pages?: number;
}
