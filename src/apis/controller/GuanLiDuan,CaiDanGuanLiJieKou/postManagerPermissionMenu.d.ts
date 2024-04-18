import { type AxiosRequestConfig } from "axios";
import { type Menu } from "../../interface";
/**
 * 添加
 * /manager/permission/menu
 */
export declare function postManagerPermissionMenu(params: PostManagerPermissionMenuParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
    };
}>;
export interface PostManagerPermissionMenuParams {
    menu: Menu;
}
