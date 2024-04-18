import request from "@/utils/require";
/**
 * 验证码预校验
 * /common/common/slider/{verificationEnums}
 */
export function postCommonCommonSliderByVerificationEnums(params, config) {
    const paramsInput = {
        xPos: params.xPos,
    };
    return request.post(`/common/common/slider/${params.verificationEnums}`, null, {
        params: paramsInput,
        ...config,
    });
}
