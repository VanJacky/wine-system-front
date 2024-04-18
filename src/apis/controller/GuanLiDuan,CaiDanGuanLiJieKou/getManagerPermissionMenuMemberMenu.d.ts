import { type AxiosRequestConfig } from "axios";
/**
 * 获取所有菜单--根据当前用户角色
 * /manager/permission/menu/memberMenu
 */
export declare function getManagerPermissionMenuMemberMenu(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        title: string;
        name: string;
        path: string;
        level: number;
        frontRoute: string;
        parentId: string;
        sortOrder: number;
        permission: string;
        children: any[];
    }[];
}>;
