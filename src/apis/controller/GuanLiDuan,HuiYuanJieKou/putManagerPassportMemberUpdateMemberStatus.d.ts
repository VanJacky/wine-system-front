import { type AxiosRequestConfig } from "axios";
/**
 * 修改会员状态,开启关闭会员
 * /manager/passport/member/updateMemberStatus
 */
export declare function putManagerPassportMemberUpdateMemberStatus(params: PutManagerPassportMemberUpdateMemberStatusParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerPassportMemberUpdateMemberStatusParams {
    /** 会员ID */
    memberIds: string;
    disabled: boolean;
}
