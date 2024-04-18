import { type AxiosRequestConfig } from "axios";
/**
 * 查看管理员角色
 * /manager/permission/userRole/{userId}
 */
export declare function getManagerPermissionUserRoleByUserId(params: GetManagerPermissionUserRoleByUserIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        userId: string;
        roleId: string;
    };
}>;
export interface GetManagerPermissionUserRoleByUserIdParams {
    userId: string;
}
