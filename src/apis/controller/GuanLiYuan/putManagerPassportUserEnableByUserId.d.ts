import { type AxiosRequestConfig } from "axios";
/**
 * 禁/启 用 用户
 * /manager/passport/user/enable/{userId}
 */
export declare function putManagerPassportUserEnableByUserId(params: PutManagerPassportUserEnableByUserIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerPassportUserEnableByUserIdParams {
    /** 用户唯一id标识 */
    userId: string;
    status: boolean;
}
