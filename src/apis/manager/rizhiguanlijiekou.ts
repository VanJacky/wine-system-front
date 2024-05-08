// @ts-ignore
/* eslint-disable */
import request from '../../utils/require';
import { COMMON_BASE_URL } from '../../../constant/constant';

/** 全部删除 DELETE /manager/setting/log */
export async function delAll(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/setting/log`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 批量删除 DELETE /manager/setting/log/${param0} */
export async function delByIds(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delByIdsParams,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/setting/log/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页获取全部 GET /manager/setting/log/getAllByPage */
export async function getAllByPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAllByPageParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/setting/log/getAllByPage`, {
    method: 'GET',
    params: {
      ...params,
      searchVo: undefined,
      ...params['searchVo'],
      pageVo: undefined,
      ...params['pageVo'],
    },
    ...(options || {}),
  });
}
