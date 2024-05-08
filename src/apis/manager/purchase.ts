// @ts-ignore
/* eslint-disable */
import request from '../../utils/require';
import { COMMON_BASE_URL } from '../../../constant/constant';

/** 求购列表分页（首页或用户个人 多条件） GET /manager/purchase/purchase */
export async function get1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get1Params,
  options?: { [key: string]: any },
) {
  return request<API.IPagePurchaseOrderVO>(`${COMMON_BASE_URL}/manager/purchase/purchase`, {
    method: 'GET',
    params: {
      ...params,
      purchaseOrderSearchParams: undefined,
      ...params['purchaseOrderSearchParams'],
    },
    ...(options || {}),
  });
}

/** 发布询价 POST /manager/purchase/purchase */
export async function addPurchaseOrderVo(
  body: API.PurchaseOrderVO,
  options?: { [key: string]: any },
) {
  return request<API.PurchaseOrderVO>(`${COMMON_BASE_URL}/manager/purchase/purchase`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 采购单详情 GET /manager/purchase/purchase/${param0} */
export async function getPurchaseOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPurchaseOrderParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PurchaseOrderVO>(`${COMMON_BASE_URL}/manager/purchase/purchase/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 关闭/开启采购单 PUT /manager/purchase/purchase/${param0} */
export async function ablePurchaseOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ablePurchaseOrderParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/purchase/purchase/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改排序 PUT /manager/purchase/purchase/rank/${param0} */
export async function rank(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.rankParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/purchase/purchase/rank/${param0}`,
    {
      method: 'PUT',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}
