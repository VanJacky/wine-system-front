import { type AxiosRequestConfig } from "axios";
import { type MemberSearchVo, type PageVo } from "../../interface";
/**
 * 会员分页列表
 * /manager/passport/member
 */
export declare function getManagerPassportMember(params: GetManagerPassportMemberParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        records: {
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
        }[];
        current: number;
        pages: number;
        size: number;
    };
}>;
export interface GetManagerPassportMemberParams {
    memberSearchVO: MemberSearchVo;
    page: PageVo;
}
