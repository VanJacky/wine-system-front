// @ts-ignore
/* eslint-disable */
import request from '../../utils/require';
import { COMMON_BASE_URL } from '../../../constant/constant';

/** 文件上传 POST /manager/common/common/upload/file */
export async function upload1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.upload1Params,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/common/common/upload/file`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
