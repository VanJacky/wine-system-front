import { type AxiosRequestConfig } from "axios";
/**
 * 修改密码
 * /manager/passport/user/editPassword
 */
export declare function putManagerPassportUserEditPassword(params: PutManagerPassportUserEditPasswordParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerPassportUserEditPasswordParams {
    password: string;
    newPassword: string;
}
