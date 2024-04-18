import { type AxiosRequestConfig } from "axios";
import { type AdminUser } from "../../interface";
/**
 * 修改用户自己资料
 * /manager/passport/user/edit
 */
export declare function putManagerPassportUserEdit(params: PutManagerPassportUserEditParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerPassportUserEditParams {
    adminUser: AdminUser;
}
