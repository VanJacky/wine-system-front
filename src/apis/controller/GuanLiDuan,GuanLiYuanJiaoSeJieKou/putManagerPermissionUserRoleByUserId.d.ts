import { type AxiosRequestConfig } from "axios";
import { type UserRole } from "../../interface";
/**
 * 更新角色菜单
 * /manager/permission/userRole/{userId}
 */
export declare function putManagerPermissionUserRoleByUserId(params: PutManagerPermissionUserRoleByUserIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        userId: string;
        roleId: string;
    };
}>;
export interface PutManagerPermissionUserRoleByUserIdParams {
    userId: string;
    userRole: UserRole[];
}
