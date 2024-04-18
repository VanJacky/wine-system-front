import { type AxiosRequestConfig } from "axios";
/**
 * 重置密码
 * /manager/passport/user/resetPassword/{ids}
 */
export declare function postManagerPassportUserResetPasswordByIds(params: PostManagerPassportUserResetPasswordByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PostManagerPassportUserResetPasswordByIdsParams {
    ids: any[];
}
