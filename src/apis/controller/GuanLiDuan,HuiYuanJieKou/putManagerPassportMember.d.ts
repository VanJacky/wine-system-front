import { type AxiosRequestConfig } from "axios";
import { type ManagerMemberEditDto } from "../../interface";
/**
 * 修改会员基本信息
 * /manager/passport/member
 */
export declare function putManagerPassportMember(input?: ManagerMemberEditDto, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
