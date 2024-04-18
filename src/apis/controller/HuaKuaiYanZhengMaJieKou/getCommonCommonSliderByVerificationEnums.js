import request from "@/utils/require";
/**
 * 获取校验接口,一分钟同一个ip请求10次
 * /common/common/slider/{verificationEnums}
 */
export function getCommonCommonSliderByVerificationEnums(params, config) {
    return request.get(`/common/common/slider/${params.verificationEnums}`, config);
}
