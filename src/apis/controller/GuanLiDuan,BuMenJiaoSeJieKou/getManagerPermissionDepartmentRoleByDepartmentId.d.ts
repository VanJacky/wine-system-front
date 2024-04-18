import { type AxiosRequestConfig } from "axios";
/**
 * 查看部门拥有的角色
 * /manager/permission/departmentRole/{departmentId}
 */
export declare function getManagerPermissionDepartmentRoleByDepartmentId(params: GetManagerPermissionDepartmentRoleByDepartmentIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        roleId: string;
        departmentId: string;
    }[];
}>;
export interface GetManagerPermissionDepartmentRoleByDepartmentIdParams {
    departmentId: string;
}
