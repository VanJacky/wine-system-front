import { type AxiosRequestConfig } from "axios";
import { type PageVo, type Role } from "../../interface";
/**
 * 查询
 * /manager/permission/role
 */
export declare function getManagerPermissionRole(params: GetManagerPermissionRoleParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        records: any[];
        total: number;
        size: number;
        current: number;
        orders: {
            column: string;
            asc: boolean;
        }[];
        optimizeCountSql: boolean;
        searchCount: boolean;
        optimizeJoinOfCountSql: boolean;
        countId: string;
        maxLimit: number;
        pages: number;
    };
}>;
export interface GetManagerPermissionRoleParams {
    pageVo: PageVo;
    role: Role;
}
