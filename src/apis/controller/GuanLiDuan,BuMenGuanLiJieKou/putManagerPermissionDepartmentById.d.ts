import { type AxiosRequestConfig } from "axios";
import { type Department } from "../../interface";
/**
 * 更新部门
 * /manager/permission/department/{id}
 */
export declare function putManagerPermissionDepartmentById(params: PutManagerPermissionDepartmentByIdParams, input?: Department, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        title: string;
        parentId: string;
        sortOrder: number;
    };
}>;
export interface PutManagerPermissionDepartmentByIdParams {
    id: string;
}
