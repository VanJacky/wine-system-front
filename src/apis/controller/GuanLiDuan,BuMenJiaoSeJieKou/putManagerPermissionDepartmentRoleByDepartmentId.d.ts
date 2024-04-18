import { type AxiosRequestConfig } from "axios";
import { type DepartmentRole } from "../../interface";
/**
 * 更新部门角色
 * /manager/permission/departmentRole/{departmentId}
 */
export declare function putManagerPermissionDepartmentRoleByDepartmentId(params: PutManagerPermissionDepartmentRoleByDepartmentIdParams, input: DepartmentRole[], config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        roleId: string;
        departmentId: string;
    };
}>;
export interface PutManagerPermissionDepartmentRoleByDepartmentIdParams {
    departmentId: string;
}
