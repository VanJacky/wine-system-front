import { type MemberVo } from "../../interface";
export interface IPageMemberVo {
    total?: number;
    size?: number;
    records?: MemberVo[];
    current?: number;
    pages?: number;
}
