// @ts-ignore
/* eslint-disable */
import request from '../../utils/require';
import { COMMON_BASE_URL } from '../../../constant/constant';

/** 获取校验接口,一分钟同一个ip请求10次 GET /common/common/slider/${param0} */
export async function getSliderImage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSliderImageParams,
  options?: { [key: string]: any },
) {
  const { verificationEnums: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/common/common/slider/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 验证码预校验 POST /common/common/slider/${param0} */
export async function verificationImage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.verificationImageParams,
  options?: { [key: string]: any },
) {
  const { verificationEnums: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/common/common/slider/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
