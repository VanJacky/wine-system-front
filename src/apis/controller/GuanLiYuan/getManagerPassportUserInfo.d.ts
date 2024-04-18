import { type AxiosRequestConfig } from "axios";
/**
 * 获取当前登录用户接口
 * /manager/passport/user/info
 */
export declare function getManagerPassportUserInfo(config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        username: string;
        password: string;
        nickName: string;
        mobile: string;
        email: string;
        avatar: string;
        isSuper: boolean;
        status: boolean;
        description: string;
        departmentId: string;
        roleIds: string;
    };
}>;
