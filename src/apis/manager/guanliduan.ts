// @ts-ignore
/* eslint-disable */
import request from '../../utils/require';
import { COMMON_BASE_URL } from '../../../constant/constant';

/** 新增品牌 POST /manager/goods/brand */
export async function save10(body: API.BrandVO, options?: { [key: string]: any }) {
  return request<API.BrandVO>(`${COMMON_BASE_URL}/manager/goods/brand`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新数据 PUT /manager/goods/brand/${param0} */
export async function update10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.update10Params,
  body: API.BrandVO,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BrandVO>(`${COMMON_BASE_URL}/manager/goods/brand/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取所有可用品牌 GET /manager/goods/brand/all */
export async function getAll1(options?: { [key: string]: any }) {
  return request<API.Brand[]>(`${COMMON_BASE_URL}/manager/goods/brand/all`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 批量删除 DELETE /manager/goods/brand/delByIds/${param0} */
export async function delAllByIds6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delAllByIds6Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/goods/brand/delByIds/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 后台禁用品牌 PUT /manager/goods/brand/disable/${param0} */
export async function disable3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.disable3Params,
  options?: { [key: string]: any },
) {
  const { brandId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/goods/brand/disable/${param0}`, {
    method: 'PUT',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 通过id获取 GET /manager/goods/brand/get/${param0} */
export async function get9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get9Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Brand>(`${COMMON_BASE_URL}/manager/goods/brand/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页获取 GET /manager/goods/brand/getByPage */
export async function getByPage7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByPage7Params,
  options?: { [key: string]: any },
) {
  return request<API.IPageBrand>(`${COMMON_BASE_URL}/manager/goods/brand/getByPage`, {
    method: 'GET',
    params: {
      ...params,
      page: undefined,
      ...params['page'],
    },
    ...(options || {}),
  });
}

/** 修改商品分类 PUT /manager/goods/category */
export async function updateCategory(body: API.CategoryVO, options?: { [key: string]: any }) {
  return request<API.Category>(`${COMMON_BASE_URL}/manager/goods/category`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加商品分类 POST /manager/goods/category */
export async function saveCategory(body: API.Category, options?: { [key: string]: any }) {
  return request<API.Category>(`${COMMON_BASE_URL}/manager/goods/category`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除分类 DELETE /manager/goods/category/${param0} */
export async function delAllByIds5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delAllByIds5Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Category>(`${COMMON_BASE_URL}/manager/goods/category/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询某分类下的全部子分类列表 GET /manager/goods/category/${param0}/all-children */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listParams,
  options?: { [key: string]: any },
) {
  const { parentId: param0, ...queryParams } = params;
  return request<API.Category[]>(
    `${COMMON_BASE_URL}/manager/goods/category/${param0}/all-children`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 查询全部分类列表 GET /manager/goods/category/allChildren */
export async function list1(options?: { [key: string]: any }) {
  return request<API.CategoryVO[]>(`${COMMON_BASE_URL}/manager/goods/category/allChildren`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 后台 禁用/启用 分类 PUT /manager/goods/category/disable/${param0} */
export async function disable2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.disable2Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/goods/category/disable/${param0}`,
    {
      method: 'PUT',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}

/** 品牌getCategoryBrandList GET /manager/goods/category/getBrandsList/${param0} */
export async function getCategoryBrandList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCategoryBrandListParams,
  options?: { [key: string]: any },
) {
  const { categoryId: param0, ...queryParams } = params;
  return request<API.CategoryBrandVO[]>(
    `${COMMON_BASE_URL}/manager/goods/category/getBrandsList/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 更新数据 PUT /manager/goods/categoryParameters */
export async function update9(body: API.CategoryParameterGroup, options?: { [key: string]: any }) {
  return request<API.CategoryParameterGroup>(
    `${COMMON_BASE_URL}/manager/goods/categoryParameters`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 保存数据 POST /manager/goods/categoryParameters */
export async function saveOrUpdate(
  body: API.CategoryParameterGroup,
  options?: { [key: string]: any },
) {
  return request<API.CategoryParameterGroup>(
    `${COMMON_BASE_URL}/manager/goods/categoryParameters`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询某分类下绑定的参数信息 GET /manager/goods/categoryParameters/${param0} */
export async function getCategoryParam(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCategoryParamParams,
  options?: { [key: string]: any },
) {
  const { categoryId: param0, ...queryParams } = params;
  return request<API.ParameterGroupVO[]>(
    `${COMMON_BASE_URL}/manager/goods/categoryParameters/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 通过id删除参数组 DELETE /manager/goods/categoryParameters/${param0} */
export async function delAllByIds4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delAllByIds4Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/goods/categoryParameters/${param0}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 管理员审核商品管理员审核商品 PUT /manager/goods/goods/${param0}/auth */
export async function auth(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.authParams,
  options?: { [key: string]: any },
) {
  const { goodsIds: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/goods/goods/${param0}/auth`, {
    method: 'PUT',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 管理员下架商品管理员下架商品时使用 PUT /manager/goods/goods/${param0}/under */
export async function underGoods(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.underGoodsParams,
  options?: { [key: string]: any },
) {
  const { goodsId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/goods/goods/${param0}/under`, {
    method: 'PUT',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 管理员上架商品管理员上架商品时使用 PUT /manager/goods/goods/${param0}/up */
export async function unpGoods(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unpGoodsParams,
  options?: { [key: string]: any },
) {
  const { goodsId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/goods/goods/${param0}/up`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页获取待审核商品 GET /manager/goods/goods/auth/list */
export async function getAuthPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAuthPageParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageGoods>(`${COMMON_BASE_URL}/manager/goods/goods/auth/list`, {
    method: 'GET',
    params: {
      ...params,
      goodsSearchParams: undefined,
      ...params['goodsSearchParams'],
    },
    ...(options || {}),
  });
}

/** 获取轮播图列表 GET /manager/goods/goods/carousel */
export async function getCarouselList(options?: { [key: string]: any }) {
  return request<string[]>(`${COMMON_BASE_URL}/manager/goods/goods/carousel`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取轮播图列表 PUT /manager/goods/goods/carousel/${param0} */
export async function setCarouselList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.setCarouselListParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string[]>(`${COMMON_BASE_URL}/manager/goods/goods/carousel/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增商品 POST /manager/goods/goods/create */
export async function save9(body: API.GoodsOperationDTO, options?: { [key: string]: any }) {
  return request<API.GoodsOperationDTO>(`${COMMON_BASE_URL}/manager/goods/goods/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除商品 PUT /manager/goods/goods/delete */
export async function deleteGoods(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteGoodsParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/goods/goods/delete`, {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过id获取商品详情 GET /manager/goods/goods/get/${param0} */
export async function get8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get8Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.GoodsVO>(`${COMMON_BASE_URL}/manager/goods/goods/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页获取 GET /manager/goods/goods/list */
export async function getByPage6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByPage6Params,
  options?: { [key: string]: any },
) {
  return request<API.IPageGoods>(`${COMMON_BASE_URL}/manager/goods/goods/list`, {
    method: 'GET',
    params: {
      ...params,
      goodsSearchParams: undefined,
      ...params['goodsSearchParams'],
    },
    ...(options || {}),
  });
}

/** 分页获取商品列表 GET /manager/goods/goods/sku/list */
export async function getSkuByPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSkuByPageParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageGoodsSku>(`${COMMON_BASE_URL}/manager/goods/goods/sku/list`, {
    method: 'GET',
    params: {
      ...params,
      goodsSearchParams: undefined,
      ...params['goodsSearchParams'],
    },
    ...(options || {}),
  });
}

/** 修改商品 PUT /manager/goods/goods/update/${param0} */
export async function update8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.update8Params,
  body: API.GoodsOperationDTO,
  options?: { [key: string]: any },
) {
  const { goodsId: param0, ...queryParams } = params;
  return request<API.GoodsOperationDTO>(`${COMMON_BASE_URL}/manager/goods/goods/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取商品计量单位 GET /manager/goods/goodsUnit */
export async function getByPage5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByPage5Params,
  options?: { [key: string]: any },
) {
  return request<API.IPageGoodsUnit>(`${COMMON_BASE_URL}/manager/goods/goodsUnit`, {
    method: 'GET',
    params: {
      ...params,
      pageVO: undefined,
      ...params['pageVO'],
    },
    ...(options || {}),
  });
}

/** 添加商品计量单位 POST /manager/goods/goodsUnit */
export async function save8(body: API.GoodsUnit, options?: { [key: string]: any }) {
  return request<API.GoodsUnit>(`${COMMON_BASE_URL}/manager/goods/goodsUnit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑商品计量单位 PUT /manager/goods/goodsUnit/${param0} */
export async function update7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.update7Params,
  body: API.GoodsUnit,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.GoodsUnit>(`${COMMON_BASE_URL}/manager/goods/goodsUnit/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除商品计量单位 DELETE /manager/goods/goodsUnit/delete/${param0} */
export async function delete2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete2Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/goods/goodsUnit/delete/${param0}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 获取商品计量单位 GET /manager/goods/goodsUnit/get/${param0} */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.GoodsUnit>(`${COMMON_BASE_URL}/manager/goods/goodsUnit/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 编辑参数 PUT /manager/goods/parameters */
export async function update6(body: API.Parameters, options?: { [key: string]: any }) {
  return request<API.Parameters>(`${COMMON_BASE_URL}/manager/goods/parameters`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加参数 POST /manager/goods/parameters */
export async function save7(body: API.Parameters, options?: { [key: string]: any }) {
  return request<API.Parameters>(`${COMMON_BASE_URL}/manager/goods/parameters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除参数 DELETE /manager/goods/parameters/${param0} */
export async function delById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/goods/parameters/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 搜索产地 GET /manager/goods/producingarea */
export async function searchPermissionList1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchPermissionList1Params,
  options?: { [key: string]: any },
) {
  return request<API.ProducingArea[]>(`${COMMON_BASE_URL}/manager/goods/producingarea`, {
    method: 'GET',
    params: {
      ...params,
      searchParams: undefined,
      ...params['searchParams'],
    },
    ...(options || {}),
  });
}

/** 添加 POST /manager/goods/producingarea */
export async function add3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.add3Params,
  options?: { [key: string]: any },
) {
  return request<API.ProducingArea>(`${COMMON_BASE_URL}/manager/goods/producingarea`, {
    method: 'POST',
    params: {
      ...params,
      producingArea: undefined,
      ...params['producingArea'],
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /manager/goods/producingarea/${param0} */
export async function edit4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.edit4Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ProducingArea>(`${COMMON_BASE_URL}/manager/goods/producingarea/${param0}`, {
    method: 'PUT',
    params: {
      ...queryParams,
      producingArea: undefined,
      ...queryParams['producingArea'],
    },
    ...(options || {}),
  });
}

/** 批量删除 DELETE /manager/goods/producingarea/${param0} */
export async function delByIds3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delByIds3Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<API.ProducingArea>(`${COMMON_BASE_URL}/manager/goods/producingarea/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页 GET /manager/goods/producingarea/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageProducingArea>(`${COMMON_BASE_URL}/manager/goods/producingarea/page`, {
    method: 'GET',
    params: {
      ...params,
      entity: undefined,
      ...params['entity'],
      searchVo: undefined,
      ...params['searchVo'],
      page: undefined,
      ...params['page'],
    },
    ...(options || {}),
  });
}

/** 获取产地树 GET /manager/goods/producingarea/tree */
export async function tree(options?: { [key: string]: any }) {
  return request<API.ProducingAreaVO[]>(`${COMMON_BASE_URL}/manager/goods/producingarea/tree`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询订单列表分页 GET /manager/order/order */
export async function queryMineOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMineOrderParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageOrderSimpleVO>(`${COMMON_BASE_URL}/manager/order/order`, {
    method: 'GET',
    params: {
      ...params,
      orderSearchParams: undefined,
      ...params['orderSearchParams'],
    },
    ...(options || {}),
  });
}

/** 订单明细 GET /manager/order/order/${param0} */
export async function detail1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detail1Params,
  options?: { [key: string]: any },
) {
  const { orderSn: param0, ...queryParams } = params;
  return request<API.OrderDetailVO>(`${COMMON_BASE_URL}/manager/order/order/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 取消订单 POST /manager/order/order/${param0}/cancel */
export async function cancel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.cancelParams,
  options?: { [key: string]: any },
) {
  const { orderSn: param0, ...queryParams } = params;
  return request<API.Order>(`${COMMON_BASE_URL}/manager/order/order/${param0}/cancel`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 确认收款 POST /manager/order/order/${param0}/pay */
export async function payOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payOrderParams,
  options?: { [key: string]: any },
) {
  const { orderSn: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/order/order/${param0}/pay`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询物流踪迹 POST /manager/order/order/getTraces/${param0} */
export async function getTraces(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTracesParams,
  options?: { [key: string]: any },
) {
  const { orderSn: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/order/order/getTraces/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 查询订单导出列表 GET /manager/order/order/queryExportOrder */
export async function queryExportOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryExportOrderParams,
  options?: { [key: string]: any },
) {
  return request<API.OrderExportDTO[]>(`${COMMON_BASE_URL}/manager/order/order/queryExportOrder`, {
    method: 'GET',
    params: {
      ...params,
      orderSearchParams: undefined,
      ...params['orderSearchParams'],
    },
    ...(options || {}),
  });
}

/** 修改收货人信息 POST /manager/order/order/update/${param0}/consignee */
export async function consignee(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.consigneeParams,
  body: API.MemberAddressDTO,
  options?: { [key: string]: any },
) {
  const { orderSn: param0, ...queryParams } = params;
  return request<API.Order>(`${COMMON_BASE_URL}/manager/order/order/update/${param0}/consignee`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 修改订单价格 PUT /manager/order/order/update/${param0}/price */
export async function updateOrderPrice(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateOrderPriceParams,
  options?: { [key: string]: any },
) {
  const { orderSn: param0, ...queryParams } = params;
  return request<API.Order>(`${COMMON_BASE_URL}/manager/order/order/update/${param0}/price`, {
    method: 'PUT',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 编辑物流公司 PUT /manager/other/logistics/${param0} */
export async function update5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.update5Params,
  body: API.Logistics,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Logistics>(`${COMMON_BASE_URL}/manager/other/logistics/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除物流公司 DELETE /manager/other/logistics/delete/${param0} */
export async function delAllByIds3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delAllByIds3Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/other/logistics/delete/${param0}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 通过id获取物流公司 GET /manager/other/logistics/get/${param0} */
export async function get7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get7Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Logistics>(`${COMMON_BASE_URL}/manager/other/logistics/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页获取物流公司 GET /manager/other/logistics/getByPage */
export async function getByPage4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByPage4Params,
  options?: { [key: string]: any },
) {
  return request<API.IPageLogistics>(`${COMMON_BASE_URL}/manager/other/logistics/getByPage`, {
    method: 'GET',
    params: {
      ...params,
      page: undefined,
      ...params['page'],
    },
    ...(options || {}),
  });
}

/** 添加物流公司 POST /manager/other/logistics/save */
export async function save6(body: API.Logistics, options?: { [key: string]: any }) {
  return request<API.Logistics>(`${COMMON_BASE_URL}/manager/other/logistics/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取页面信息 GET /manager/other/pageData/${param0} */
export async function getPageData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPageDataParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PageData>(`${COMMON_BASE_URL}/manager/other/pageData/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加页面 POST /manager/other/pageData/add */
export async function addPageData(body: API.PageData, options?: { [key: string]: any }) {
  return request<API.PageData>(`${COMMON_BASE_URL}/manager/other/pageData/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 页面列表 GET /manager/other/pageData/pageDataList */
export async function pageDataList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageDataListParams,
  options?: { [key: string]: any },
) {
  return request<API.IPagePageDataListVO>(
    `${COMMON_BASE_URL}/manager/other/pageData/pageDataList`,
    {
      method: 'GET',
      params: {
        ...params,
        pageVO: undefined,
        ...params['pageVO'],
        pageDataDTO: undefined,
        ...params['pageDataDTO'],
      },
      ...(options || {}),
    },
  );
}

/** 发布页面 PUT /manager/other/pageData/release/${param0} */
export async function release(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.releaseParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PageData>(`${COMMON_BASE_URL}/manager/other/pageData/release/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除页面 DELETE /manager/other/pageData/remove/${param0} */
export async function remove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/other/pageData/remove/${param0}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 修改页面 PUT /manager/other/pageData/update/${param0} */
export async function updatePageData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePageDataParams,
  body: API.PageData,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PageData>(`${COMMON_BASE_URL}/manager/other/pageData/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 会员分页列表 GET /manager/passport/member */
export async function getByPage2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByPage2Params,
  options?: { [key: string]: any },
) {
  return request<API.IPageMemberVO>(`${COMMON_BASE_URL}/manager/passport/member`, {
    method: 'GET',
    params: {
      ...params,
      memberSearchVO: undefined,
      ...params['memberSearchVO'],
      page: undefined,
      ...params['page'],
    },
    ...(options || {}),
  });
}

/** 修改会员基本信息 PUT /manager/passport/member */
export async function update4(body: API.ManagerMemberEditDTO, options?: { [key: string]: any }) {
  return request<API.Member>(`${COMMON_BASE_URL}/manager/passport/member`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加会员 POST /manager/passport/member */
export async function save5(body: API.MemberAddDTO, options?: { [key: string]: any }) {
  return request<API.Member>(`${COMMON_BASE_URL}/manager/passport/member`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过ID获取会员信息 GET /manager/passport/member/${param0} */
export async function get6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get6Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.MemberVO>(`${COMMON_BASE_URL}/manager/passport/member/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据条件查询会员总数 GET /manager/passport/member/num */
export async function getByPage3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByPage3Params,
  options?: { [key: string]: any },
) {
  return request<number>(`${COMMON_BASE_URL}/manager/passport/member/num`, {
    method: 'GET',
    params: {
      ...params,
      memberSearchVO: undefined,
      ...params['memberSearchVO'],
    },
    ...(options || {}),
  });
}

/** 修改会员状态,开启关闭会员 PUT /manager/passport/member/updateMemberStatus */
export async function updateMemberStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateMemberStatusParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/passport/member/updateMemberStatus`,
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取树状结构 GET /manager/permission/department */
export async function getByPage1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByPage1Params,
  options?: { [key: string]: any },
) {
  return request<API.DepartmentVO[]>(`${COMMON_BASE_URL}/manager/permission/department`, {
    method: 'GET',
    params: {
      ...params,
      entity: undefined,
      ...params['entity'],
      searchVo: undefined,
      ...params['searchVo'],
    },
    ...(options || {}),
  });
}

/** 新增部门 POST /manager/permission/department */
export async function save4(body: API.Department, options?: { [key: string]: any }) {
  return request<API.Department>(`${COMMON_BASE_URL}/manager/permission/department`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看部门详情 GET /manager/permission/department/${param0} */
export async function get5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get5Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Department>(`${COMMON_BASE_URL}/manager/permission/department/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新部门 PUT /manager/permission/department/${param0} */
export async function update3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.update3Params,
  body: API.Department,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Department>(`${COMMON_BASE_URL}/manager/permission/department/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除部门 DELETE /manager/permission/department/${param0} */
export async function delAllByIds1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delAllByIds1Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/permission/department/${param0}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 查看部门拥有的角色 GET /manager/permission/departmentRole/${param0} */
export async function get4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get4Params,
  options?: { [key: string]: any },
) {
  const { departmentId: param0, ...queryParams } = params;
  return request<API.DepartmentRole[]>(
    `${COMMON_BASE_URL}/manager/permission/departmentRole/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 更新部门角色 PUT /manager/permission/departmentRole/${param0} */
export async function update2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.update2Params,
  body: API.DepartmentRole[],
  options?: { [key: string]: any },
) {
  const { departmentId: param0, ...queryParams } = params;
  return request<API.DepartmentRole>(
    `${COMMON_BASE_URL}/manager/permission/departmentRole/${param0}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    },
  );
}

/** 搜索菜单 GET /manager/permission/menu */
export async function searchPermissionList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchPermissionListParams,
  options?: { [key: string]: any },
) {
  return request<API.Menu[]>(`${COMMON_BASE_URL}/manager/permission/menu`, {
    method: 'GET',
    params: {
      ...params,
      searchParams: undefined,
      ...params['searchParams'],
    },
    ...(options || {}),
  });
}

/** 添加 POST /manager/permission/menu */
export async function add2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.add2Params,
  options?: { [key: string]: any },
) {
  return request<API.Menu>(`${COMMON_BASE_URL}/manager/permission/menu`, {
    method: 'POST',
    params: {
      ...params,
      menu: undefined,
      ...params['menu'],
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /manager/permission/menu/${param0} */
export async function edit2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.edit2Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Menu>(`${COMMON_BASE_URL}/manager/permission/menu/${param0}`, {
    method: 'PUT',
    params: {
      ...queryParams,
      menu: undefined,
      ...queryParams['menu'],
    },
    ...(options || {}),
  });
}

/** 批量删除 DELETE /manager/permission/menu/${param0} */
export async function delByIds2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delByIds2Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<API.Menu>(`${COMMON_BASE_URL}/manager/permission/menu/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取所有菜单--根据当前用户角色 GET /manager/permission/menu/memberMenu */
export async function memberMenu(options?: { [key: string]: any }) {
  return request<API.MenuVO[]>(`${COMMON_BASE_URL}/manager/permission/menu/memberMenu`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取所有菜单 GET /manager/permission/menu/tree */
export async function getAllMenuList(options?: { [key: string]: any }) {
  return request<API.MenuVO[]>(`${COMMON_BASE_URL}/manager/permission/menu/tree`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询 GET /manager/permission/role */
export async function add4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.add4Params,
  options?: { [key: string]: any },
) {
  return request<API.PageObject>(`${COMMON_BASE_URL}/manager/permission/role`, {
    method: 'GET',
    params: {
      ...params,
      pageVo: undefined,
      ...params['pageVo'],
      role: undefined,
      ...params['role'],
    },
    ...(options || {}),
  });
}

/** 添加 POST /manager/permission/role */
export async function add1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.add1Params,
  options?: { [key: string]: any },
) {
  return request<API.Role>(`${COMMON_BASE_URL}/manager/permission/role`, {
    method: 'POST',
    params: {
      ...params,
      role: undefined,
      ...params['role'],
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /manager/permission/role/${param0} */
export async function edit1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.edit1Params,
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<API.Role>(`${COMMON_BASE_URL}/manager/permission/role/${param0}`, {
    method: 'PUT',
    params: {
      ...queryParams,
      role: undefined,
      ...queryParams['role'],
    },
    ...(options || {}),
  });
}

/** 批量删除 DELETE /manager/permission/role/${param0} */
export async function delByIds1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delByIds1Params,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<API.Role>(`${COMMON_BASE_URL}/manager/permission/role/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查看某角色拥有到菜单 GET /manager/permission/roleMenu/${param0} */
export async function get3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get3Params,
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<API.RoleMenu[]>(`${COMMON_BASE_URL}/manager/permission/roleMenu/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存角色菜单 POST /manager/permission/roleMenu/${param0} */
export async function save3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.save3Params,
  body: API.RoleMenu[],
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/permission/roleMenu/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 查看管理员角色 GET /manager/permission/userRole/${param0} */
export async function get2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.get2Params,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.UserRole>(`${COMMON_BASE_URL}/manager/permission/userRole/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新角色菜单 PUT /manager/permission/userRole/${param0} */
export async function update1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.update1Params,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.UserRole>(`${COMMON_BASE_URL}/manager/permission/userRole/${param0}`, {
    method: 'PUT',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 查看配置 GET /manager/setting/get/${param0} */
export async function settingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.settingGetParams,
  options?: { [key: string]: any },
) {
  const { key: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/setting/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新配置 PUT /manager/setting/put/${param0} */
export async function saveConfig(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveConfigParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { key: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/setting/put/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 增加地区 POST /manager/setting/region */
export async function save2(body: API.Region, options?: { [key: string]: any }) {
  return request<API.Region>(`${COMMON_BASE_URL}/manager/setting/region`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id获取地区详情 GET /manager/setting/region/${param0} */
export async function get(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Region>(`${COMMON_BASE_URL}/manager/setting/region/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新地区 PUT /manager/setting/region/${param0} */
export async function update(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateParams,
  body: API.Region,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Region>(`${COMMON_BASE_URL}/manager/setting/region/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 批量通过id删除 DELETE /manager/setting/region/${param0} */
export async function delAllByIds(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delAllByIdsParams,
  options?: { [key: string]: any },
) {
  const { ids: param0, ...queryParams } = params;
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/setting/region/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 通过id获取子地区 GET /manager/setting/region/item/${param0} */
export async function getItem(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getItemParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Region[]>(`${COMMON_BASE_URL}/manager/setting/region/item/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 同步高德行政地区数据 POST /manager/setting/region/sync */
export async function synchronizationData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.synchronizationDataParams,
  options?: { [key: string]: any },
) {
  return request<any>(`${COMMON_BASE_URL}/manager/setting/region/sync`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增短信签名 POST /manager/sms/sign */
export async function save1(body: API.SmsSign, options?: { [key: string]: any }) {
  return request<API.SmsSign>(`${COMMON_BASE_URL}/manager/sms/sign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询签名详细 GET /manager/sms/sign/${param0} */
export async function getDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.SmsSign>(`${COMMON_BASE_URL}/manager/sms/sign/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除短信签名 DELETE /manager/sms/sign/${param0} */
export async function delete1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delete1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.SmsSign>(`${COMMON_BASE_URL}/manager/sms/sign/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改短信签名 PUT /manager/sms/sign/modifySmsSign */
export async function modifySmsSign(body: API.SmsSign, options?: { [key: string]: any }) {
  return request<API.SmsSign>(`${COMMON_BASE_URL}/manager/sms/sign/modifySmsSign`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询短信签名状态 PUT /manager/sms/sign/querySmsSign */
export async function querySmsSign1(options?: { [key: string]: any }) {
  return request<API.SmsSign>(`${COMMON_BASE_URL}/manager/sms/sign/querySmsSign`, {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 查询短信签名分页 GET /manager/sms/sign/querySmsSignPage */
export async function querySmsSignPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.querySmsSignPageParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageSmsSign>(`${COMMON_BASE_URL}/manager/sms/sign/querySmsSignPage`, {
    method: 'GET',
    params: {
      ...params,
      page: undefined,
      ...params['page'],
    },
    ...(options || {}),
  });
}

/** 新增短信模板 POST /manager/sms/template */
export async function save(body: API.SmsTemplate, options?: { [key: string]: any }) {
  return request<API.SmsTemplate>(`${COMMON_BASE_URL}/manager/sms/template`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除短信模板 DELETE /manager/sms/template */
export async function deleteUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.SmsTemplate>(`${COMMON_BASE_URL}/manager/sms/template`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改短信模板 PUT /manager/sms/template/modifySmsTemplate */
export async function modifySmsTemplate(body: API.SmsTemplate, options?: { [key: string]: any }) {
  return request<API.SmsTemplate>(`${COMMON_BASE_URL}/manager/sms/template/modifySmsTemplate`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询短信模板状态 PUT /manager/sms/template/querySmsSign */
export async function querySmsSign(options?: { [key: string]: any }) {
  return request<API.SmsTemplate>(`${COMMON_BASE_URL}/manager/sms/template/querySmsSign`, {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 查询短信模板分页 GET /manager/sms/template/querySmsTemplatePage */
export async function querySmsTemplatePage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.querySmsTemplatePageParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageSmsTemplate>(
    `${COMMON_BASE_URL}/manager/sms/template/querySmsTemplatePage`,
    {
      method: 'GET',
      params: {
        ...params,
        page: undefined,
        ...params['page'],
      },
      ...(options || {}),
    },
  );
}

/** 获取店铺分页列表 GET /manager/store/store */
export async function getByPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByPageParams,
  options?: { [key: string]: any },
) {
  return request<API.IPageStoreVO>(`${COMMON_BASE_URL}/manager/store/store`, {
    method: 'GET',
    params: {
      ...params,
      entity: undefined,
      ...params['entity'],
      page: undefined,
      ...params['page'],
    },
    ...(options || {}),
  });
}

/** 添加店铺 POST /manager/store/store/add */
export async function add(body: API.AdminStoreApplyDTO, options?: { [key: string]: any }) {
  return request<API.Store>(`${COMMON_BASE_URL}/manager/store/store/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取店铺分页列表 GET /manager/store/store/all */
export async function getAll(options?: { [key: string]: any }) {
  return request<API.Store[]>(`${COMMON_BASE_URL}/manager/store/store/all`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 审核店铺申请 PUT /manager/store/store/audit/${param0}/${param1} */
export async function audit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.auditParams,
  options?: { [key: string]: any },
) {
  const { id: param0, passed: param1, ...queryParams } = params;
  return request<Record<string, any>>(
    `${COMMON_BASE_URL}/manager/store/store/audit/${param0}/${param1}`,
    {
      method: 'PUT',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 关闭店铺 PUT /manager/store/store/disable/${param0} */
export async function disable(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.disableParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Store>(`${COMMON_BASE_URL}/manager/store/store/disable/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 编辑店铺 PUT /manager/store/store/edit/${param0} */
export async function edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editParams,
  body: API.StoreEditDTO,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Store>(`${COMMON_BASE_URL}/manager/store/store/edit/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 开启店铺 PUT /manager/store/store/enable/${param0} */
export async function enable(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.enableParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Store>(`${COMMON_BASE_URL}/manager/store/store/enable/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取店铺详情 GET /manager/store/store/get/detail/${param0} */
export async function detail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailParams,
  options?: { [key: string]: any },
) {
  const { storeId: param0, ...queryParams } = params;
  return request<API.StoreDetailVO>(`${COMMON_BASE_URL}/manager/store/store/get/detail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 设置保证金 PUT /manager/store/store/guarantee */
export async function guarantee(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.guaranteeParams,
  options?: { [key: string]: any },
) {
  return request<API.Store>(`${COMMON_BASE_URL}/manager/store/store/guarantee`, {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
