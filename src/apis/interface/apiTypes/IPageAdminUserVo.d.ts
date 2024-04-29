import { type AdminUserVo } from "../../interface";
export interface IPageAdminUserVo {
    total?: number;
    records?: AdminUserVo[];
    current?: number;
    pages?: number;
    size?: number;
}
