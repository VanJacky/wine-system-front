import { type AxiosRequestConfig } from "axios";
/**
 * 查看某角色拥有到菜单
 * /manager/permission/roleMenu/{roleId}
 */
export declare function getManagerPermissionRoleMenuByRoleId(params: GetManagerPermissionRoleMenuByRoleIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        roleId: string;
        menuId: string;
        isSuper: boolean;
    }[];
}>;
export interface GetManagerPermissionRoleMenuByRoleIdParams {
    roleId: string;
}
