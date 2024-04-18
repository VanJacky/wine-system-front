import { type AxiosRequestConfig } from "axios";
import { type MemberSearchVo } from "../../interface";
/**
 * 根据条件查询会员总数
 * /manager/passport/member/num
 */
export declare function getManagerPassportMemberNum(params: GetManagerPassportMemberNumParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: number;
}>;
export interface GetManagerPassportMemberNumParams {
    memberSearchVO: MemberSearchVo;
}
