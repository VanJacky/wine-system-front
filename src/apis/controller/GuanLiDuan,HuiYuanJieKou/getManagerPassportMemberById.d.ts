import { type AxiosRequestConfig } from "axios";
/**
 * 通过ID获取会员信息
 * /manager/passport/member/{id}
 */
export declare function getManagerPassportMemberById(params: GetManagerPassportMemberByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        username: string;
        nickName: string;
        sex: number;
        birthday: string;
        regionId: string;
        region: string;
        mobile: string;
        point: number;
        totalPoint: number;
        face: string;
        disabled: boolean;
        haveStore: boolean;
        storeId: string;
        openId: string;
        clientEnum: string;
        lastLoginDate: string;
        gradeId: string;
        experience: number;
    };
}>;
export interface GetManagerPassportMemberByIdParams {
    /** 会员ID */
    id: string;
}
