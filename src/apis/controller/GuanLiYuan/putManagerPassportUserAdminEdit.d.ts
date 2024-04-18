import { type AxiosRequestConfig } from "axios";
import { type AdminUser } from "../../interface";
/**
 * 超级管理员修改其他管理员资料
 * /manager/passport/user/admin/edit
 */
export declare function putManagerPassportUserAdminEdit(params: PutManagerPassportUserAdminEditParams, input?: AdminUser, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerPassportUserAdminEditParams {
    roles?: string[];
}
