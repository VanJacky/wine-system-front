import { type AxiosRequestConfig } from "axios";
import { type Department } from "../../interface";
/**
 * 新增部门
 * /manager/permission/department
 */
export declare function postManagerPermissionDepartment(input?: Department, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
