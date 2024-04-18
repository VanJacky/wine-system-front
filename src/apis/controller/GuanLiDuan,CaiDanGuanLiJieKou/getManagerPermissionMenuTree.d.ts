import { type AxiosRequestConfig } from "axios";
/**
 * 获取所有菜单
 * /manager/permission/menu/tree
 */
export declare function getManagerPermissionMenuTree(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
