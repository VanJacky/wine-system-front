import { type AxiosRequestConfig } from "axios";
/**
 * 验证码预校验
 * /common/common/slider/{verificationEnums}
 */
export declare function postCommonCommonSliderByVerificationEnums(params: PostCommonCommonSliderByVerificationEnumsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PostCommonCommonSliderByVerificationEnumsParams {
    xPos: number;
    verificationEnums: 'LOGIN' | 'REGISTER' | 'FIND_USER' | 'UPDATE_PASSWORD' | 'WALLET_PASSWORD';
}
