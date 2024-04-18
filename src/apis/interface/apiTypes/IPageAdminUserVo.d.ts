import { type AdminUserVo } from "../../interface";
export interface IPageAdminUserVo {
    total?: number;
    size?: number;
    records?: AdminUserVo[];
    current?: number;
    pages?: number;
}
