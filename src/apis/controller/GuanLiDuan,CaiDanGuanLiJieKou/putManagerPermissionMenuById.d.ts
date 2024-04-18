import { type AxiosRequestConfig } from "axios";
import { type Menu } from "../../interface";
/**
 * 编辑
 * /manager/permission/menu/{id}
 */
export declare function putManagerPermissionMenuById(params: PutManagerPermissionMenuByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface PutManagerPermissionMenuByIdParams {
    /** 菜单ID */
    id: string;
    menu: Menu;
}
