import { type AxiosRequestConfig } from "axios";
/**
 * 注销接口
 * /manager/passport/user/logout
 */
export declare function postManagerPassportUserLogout(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
