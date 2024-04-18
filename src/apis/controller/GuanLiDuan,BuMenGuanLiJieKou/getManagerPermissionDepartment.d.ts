import { type AxiosRequestConfig } from "axios";
import { type Department, type SearchVo } from "../../interface";
/**
 * 获取树状结构
 * /manager/permission/department
 */
export declare function getManagerPermissionDepartment(params: GetManagerPermissionDepartmentParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        title: string;
        parentId: string;
        sortOrder: number;
        children: any[];
    }[];
}>;
export interface GetManagerPermissionDepartmentParams {
    entity: Department;
    searchVo: SearchVo;
}
