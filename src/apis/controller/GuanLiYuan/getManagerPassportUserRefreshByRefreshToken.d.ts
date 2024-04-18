import { type AxiosRequestConfig } from "axios";
/**
 * 刷新token
 * /manager/passport/user/refresh/{refreshToken}
 */
export declare function getManagerPassportUserRefreshByRefreshToken(params: GetManagerPassportUserRefreshByRefreshTokenParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface GetManagerPassportUserRefreshByRefreshTokenParams {
    refreshToken: string;
}
