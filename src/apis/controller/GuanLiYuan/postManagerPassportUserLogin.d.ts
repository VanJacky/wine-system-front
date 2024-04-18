import { type AxiosRequestConfig } from "axios";
/**
 * /manager/passport/user/login
 */
export declare function postManagerPassportUserLogin(params: PostManagerPassportUserLoginParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        accessToken: string;
        refreshToken: string;
    };
}>;
export interface PostManagerPassportUserLoginParams {
    username: string;
    password: string;
}
