import { type AxiosRequestConfig } from "axios";
import { type Role } from "../../interface";
/**
 * 编辑
 * /manager/permission/role/{roleId}
 */
export declare function putManagerPermissionRoleByRoleId(params: PutManagerPermissionRoleByRoleIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
        defaultRole: boolean;
        description: string;
    };
}>;
export interface PutManagerPermissionRoleByRoleIdParams {
    roleId: string;
    role: Role;
}
