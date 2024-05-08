// @ts-ignore
/* eslint-disable */
import request from '../../utils/require';
import { COMMON_BASE_URL } from '../../../constant/constant';

/** 多条件分页获取用户列表 GET /manager/passport/user */
export async function getByCondition(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByConditionParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageAdminUserVO>(`${COMMON_BASE_URL}/manager/passport/user`, {
    method: 'GET',
    params: {
      ...params,
      user: undefined,
      ...params['user'],
      searchVo: undefined,
      ...params['searchVo'],
      pageVo: undefined,
      ...params['pageVo'],
    },
    ...(options || {}),
  });
}

/** 添加用户 POST /manager/passport/user */
export async function register(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.registerParams,
  body: API.AdminUserDTO,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/passport/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量通过ids删除 DELETE /manager/passport/user/${param0} */
export async function delAllByIds2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delAllByIds2Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/passport/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 超级管理员修改其他管理员资料 PUT /manager/passport/user/admin/edit */
export async function edit3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.edit3Params,
  body: API.AdminUser,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/passport/user/admin/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户自己资料 用户名密码不会修改 PUT /manager/passport/user/edit */
export async function editOwner(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editOwnerParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/passport/user/edit`, {
    method: 'PUT',
    params: {
      ...params,
      adminUser: undefined,
      ...params['adminUser'],
    },
    ...(options || {}),
  });
}

/** 修改密码 PUT /manager/passport/user/editPassword */
export async function editPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editPasswordParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/passport/user/editPassword`, {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 禁/启 用 用户 PUT /manager/passport/user/enable/${param0} */
export async function disable1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.disable1Params,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/passport/user/enable/${param0}`, {
    method: 'PUT',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取当前登录用户接口 GET /manager/passport/user/info */
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<API.AdminUser>(`${COMMON_BASE_URL}/manager/passport/user/info`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录管理员 POST /manager/passport/user/login */
export async function login(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginParams,
  options?: { [key: string]: any },
) {
  return request<API.Token>(`${COMMON_BASE_URL}/manager/passport/user/login`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 注销接口 POST /manager/passport/user/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/passport/user/logout`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 刷新token GET /manager/passport/user/refresh/${param0} */
export async function refreshToken(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.refreshTokenParams,
  options?: { [key: string]: any },
) {
  const { refreshToken: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/passport/user/refresh/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 重置密码 POST /manager/passport/user/resetPassword/${param0} */
export async function resetPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.resetPasswordParams,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/passport/user/resetPassword/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}
