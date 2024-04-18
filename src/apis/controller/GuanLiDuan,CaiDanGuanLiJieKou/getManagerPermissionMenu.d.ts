import { type AxiosRequestConfig } from "axios";
import { type MenuSearchParams } from "../../interface";
/**
 * 搜索菜单
 * /manager/permission/menu
 */
export declare function getManagerPermissionMenu(params: GetManagerPermissionMenuParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
    }[];
}>;
export interface GetManagerPermissionMenuParams {
    searchParams: MenuSearchParams;
}
