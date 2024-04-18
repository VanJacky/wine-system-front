import { type AxiosRequestConfig } from "axios";
import { type Role } from "../../interface";
/**
 * 添加
 * /manager/permission/role
 */
export declare function postManagerPermissionRole(params: PostManagerPermissionRoleParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface PostManagerPermissionRoleParams {
    role: Role;
}
