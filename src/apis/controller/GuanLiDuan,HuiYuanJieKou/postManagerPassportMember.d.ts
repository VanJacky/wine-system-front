import { type AxiosRequestConfig } from "axios";
import { type MemberAddDto } from "../../interface";
/**
 * 添加会员
 * /manager/passport/member
 */
export declare function postManagerPassportMember(input?: MemberAddDto, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        username: string;
        password: string;
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
        clientEnum: string;
        lastLoginDate: string;
        gradeId: string;
        experience: number;
    };
}>;
