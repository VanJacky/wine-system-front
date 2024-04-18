import { type AxiosRequestConfig } from "axios";
/**
 * 查看部门详情
 * /manager/permission/department/{id}
 */
export declare function getManagerPermissionDepartmentById(params: GetManagerPermissionDepartmentByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
export interface GetManagerPermissionDepartmentByIdParams {
    id: string;
}
