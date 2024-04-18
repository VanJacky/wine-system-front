import { type MemberVo } from "../../interface";
export interface IPageMemberVo {
    total?: number;
    records?: MemberVo[];
    current?: number;
    pages?: number;
    size?: number;
}
