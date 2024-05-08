// @ts-ignore
/* eslint-disable */
import request from '../../utils/require';
import { COMMON_BASE_URL } from '../../../constant/constant';

/** 获取自己的图片资源 GET /manager/common/file */
export async function getFileList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFileListParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageFile>(`${COMMON_BASE_URL}/manager/common/file`, {
    method: 'GET',
    params: {
      ...params,
      file: undefined,
      ...params['file'],
      searchVO: undefined,
      ...params['searchVO'],
      pageVo: undefined,
      ...params['pageVo'],
    },
    ...(options || {}),
  });
}

/** 文件删除 DELETE /manager/common/file/delete/${param0} */
export async function delete3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete3Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/common/file/delete/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 文件重命名 POST /manager/common/file/rename */
export async function upload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadParams,
  options?: { [key: string]: any },
) {
  return request<API.File>(`${COMMON_BASE_URL}/manager/common/file/rename`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
