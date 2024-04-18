import { type AxiosRequestConfig } from "axios";
import { type RoleMenu } from "../../interface";
/**
 * 保存角色菜单
 * /manager/permission/roleMenu/{roleId}
 */
export declare function postManagerPermissionRoleMenuByRoleId(params: PostManagerPermissionRoleMenuByRoleIdParams, input: RoleMenu[], config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PostManagerPermissionRoleMenuByRoleIdParams {
    roleId: string;
}
