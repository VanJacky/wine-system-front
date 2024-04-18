import { type AxiosRequestConfig } from "axios";
import { type AdminUserDto } from "../../interface";
/**
 * 添加用户
 * /manager/passport/user
 */
export declare function postManagerPassportUser(params: PostManagerPassportUserParams, input?: AdminUserDto, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PostManagerPassportUserParams {
    roles?: string[];
}
