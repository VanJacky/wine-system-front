declare namespace API {
  type ablePurchaseOrderParams = {
    /** 采购单ID */
    id: string;
  };

  type add1Params = {
    role: Role;
  };

  type add2Params = {
    menu: Menu;
  };

  type add3Params = {
    producingArea: ProducingArea;
  };

  type add4Params = {
    pageVo: PageVO;
    role: Role;
  };

  type AdminStoreApplyDTO = {
    /** 会员ID */
    memberId?: string;
    /** 店铺名称 */
    storeName: string;
    /** 店铺logo */
    storeLogo?: string;
    /** 店铺简介 */
    storeDesc: string;
    /** 经纬度 */
    storeCenter?: string;
    /** 店铺经营类目 */
    goodsManagementCategory?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 地址名称， '，'分割 */
    storeAddressPath?: string;
    /** 地址id，'，'分割  */
    storeAddressIdPath?: string;
    /** 详细地址 */
    storeAddressDetail?: string;
    /** 公司名称 */
    companyName: string;
    /** 公司电话 */
    companyPhone?: string;
    /** 公司地址 */
    companyAddress: string;
    /** 公司地址地区Id */
    companyAddressIdPath?: string;
    /** 公司地址地区 */
    companyAddressPath?: string;
    /** 员工总数 */
    employeeNum?: string;
    /** 注册资金 */
    registeredCapital?: number;
    /** 联系人姓名 */
    linkName: string;
    /** 联系人电话 */
    linkPhone: string;
    /** 电子邮箱 */
    companyEmail?: string;
    /** 营业执照号 */
    licenseNum?: string;
    /** 法定经营范围 */
    scope?: string;
    /** 营业执照电子版 */
    licencePhoto: string;
    /** 法人姓名 */
    legalName: string;
    /** 法人身份证 */
    legalId: string;
    /** 法人身份证照片 */
    legalPhoto: string;
    /** 结算银行开户行名称 */
    settlementBankAccountName: string;
    /** 结算银行开户账号 */
    settlementBankAccountNum: string;
    /** 结算银行开户支行名称 */
    settlementBankBranchName: string;
    /** 结算银行支行联行号 */
    settlementBankJointName: string;
    /** 收货人姓名 */
    salesConsigneeName?: string;
    /** 收件人手机 */
    salesConsigneeMobile?: string;
    /** 地址Id， '，'分割 */
    salesConsigneeAddressId?: string;
    /** 地址名称， '，'分割 */
    salesConsigneeAddressPath?: string;
    /** 详细地址 */
    salesConsigneeDetail?: string;
    /** 同城配送达达店铺编码 */
    ddCode?: string;
    /** 结算周期 */
    settlementCycle?: string;
  };

  type AdminUser = {
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 昵称 */
    nickName?: string;
    /** 手机 */
    mobile?: string;
    /** 邮件 */
    email?: string;
    /** 用户头像 */
    avatar?: string;
    /** 是否是超级管理员 超级管理员/普通管理员 */
    isSuper?: boolean;
    /** 状态 默认true正常 false禁用 */
    status?: boolean;
    /** 描述/详情/备注 */
    description?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 角色id集合 */
    roleIds?: string;
  };

  type AdminUserDTO = {
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 昵称 */
    nickName?: string;
    /** 手机 */
    mobile?: string;
    /** 邮件 */
    email?: string;
    /** 头像 */
    avatar?: string;
    /** 描述/详情/备注 */
    description?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 是否为超级管理员 */
    isSuper?: boolean;
  };

  type AdminUserVO = {
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 昵称 */
    nickName?: string;
    /** 手机 */
    mobile?: string;
    /** 邮件 */
    email?: string;
    /** 用户头像 */
    avatar?: string;
    /** 是否是超级管理员 超级管理员/普通管理员 */
    isSuper?: boolean;
    /** 状态 默认true正常 false禁用 */
    status?: boolean;
    /** 描述/详情/备注 */
    description?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 角色id集合 */
    roleIds?: string;
    /** 所属部门名称 */
    departmentTitle?: string;
    /** 用户拥有角色 */
    roles?: Role[];
    /** 用户拥有的权限 */
    menus?: Menu[];
  };

  type AllowOperation = {
    /** 可以取消 */
    cancel?: boolean;
    /** 可以支付 */
    pay?: boolean;
    /** 可以发货 */
    ship?: boolean;
    /** 可以收货 */
    rog?: boolean;
    /** 是否允许查看物流信息 */
    showLogistics?: boolean;
    /** 是否允许更改收货人信息 */
    editConsignee?: boolean;
    /** 是否允许更改价格 */
    editPrice?: boolean;
    /** 是否可以进行核销 */
    take?: boolean;
  };

  type auditParams = {
    /** 店铺id */
    id: string;
    /** 是否通过审核 0 通过 1 拒绝  2 处理中 编辑操作则不需传递 */
    passed: number;
  };

  type authParams = {
    goodsIds: string[];
    authFlag: string;
  };

  type Brand = {
    /** 品牌名称 */
    name: string;
    /** 品牌图标 */
    logo: string;
    /** 排序值 */
    rank: number;
  };

  type BrandPageDTO = {
    page_number?: number;
    page_size?: number;
    sort?: string;
    order?: string;
    not_convert?: boolean;
    /** 品牌名称 */
    name?: string;
  };

  type BrandVO = {
    /** 品牌名称 */
    name: string;
    /** 品牌图标 */
    logo: string;
    /** 排序值 */
    rank: number;
  };

  type cancelParams = {
    orderSn: string;
    reason: string;
  };

  type Category = {
    /** 分类名称 */
    name: string;
    /** 父id, 根节点为0 */
    parentId: string;
    /** 层级, 从0开始 */
    level: number;
    /** 排序值 */
    rank: number;
    /** 佣金比例 */
    commissionRate?: number;
    /** 分类图标 */
    image?: string;
    /** 是否支持频道 */
    supportChannel?: boolean;
  };

  type CategoryBrandVO = {
    /** 品牌id */
    id: string;
    /** 品牌名称 */
    name: string;
  };

  type CategoryParameterGroup = {
    /** 参数组名称 */
    groupName: string;
    /** 关联分类id */
    categoryId: string;
  };

  type CategoryVO = {
    /** 分类名称 */
    name: string;
    /** 父id, 根节点为0 */
    parentId: string;
    /** 层级, 从0开始 */
    level: number;
    /** 排序值 */
    rank: number;
    /** 佣金比例 */
    commissionRate?: number;
    /** 分类图标 */
    image?: string;
    /** 是否支持频道 */
    supportChannel?: boolean;
    /** 父节点名称 */
    parentTitle?: string;
    /** 子分类列表 */
    children?: CategoryVO[];
    /** 分类关联的品牌列表 */
    brandList?: CategoryBrandVO[];
  };

  type consigneeParams = {
    orderSn: string;
  };

  type delAllByIds1Params = {
    ids: string[];
  };

  type delAllByIds2Params = {
    ids: string[];
  };

  type delAllByIds3Params = {
    id: string;
  };

  type delAllByIds4Params = {
    id: string;
  };

  type delAllByIds5Params = {
    id: string;
  };

  type delAllByIds6Params = {
    ids: string[];
  };

  type delAllByIdsParams = {
    ids: string[];
  };

  type delByIdParams = {
    id: string;
  };

  type delByIds1Params = {
    ids: string[];
  };

  type delByIds2Params = {
    ids: string[];
  };

  type delByIds3Params = {
    ids: string[];
  };

  type delByIdsParams = {
    ids: string[];
  };

  type delete1Params = {
    /** 短信签名id */
    id: string;
  };

  type delete2Params = {
    ids: string[];
  };

  type delete3Params = {
    ids: string[];
  };

  type deleteGoodsParams = {
    goodsId: string[];
  };

  type deleteUsingDELETEParams = {
    /** 短信模板CODE */
    templateCode: string;
  };

  type Department = {
    /** 部门名称 */
    title: string;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    sortOrder?: number;
  };

  type DepartmentRole = {
    /** 角色id */
    roleId?: string;
    /** 部门id */
    departmentId?: string;
  };

  type DepartmentVO = {
    /** 部门名称 */
    title: string;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    sortOrder?: number;
    children?: DepartmentVO[];
  };

  type detail1Params = {
    orderSn: string;
  };

  type detailParams = {
    storeId: string;
  };

  type disable1Params = {
    /** 用户唯一id标识 */
    userId: string;
    status: boolean;
  };

  type disable2Params = {
    id: string;
    enableOperations: boolean;
  };

  type disable3Params = {
    brandId: string;
    disable: boolean;
  };

  type disableParams = {
    id: string;
  };

  type DiscountPriceItem = {
    /** 促销类型 */
    promotionTypeEnum?:
      | 'PINTUAN'
      | 'SECKILL'
      | 'COUPON'
      | 'PLATFORM_COUPON'
      | 'FULL_DISCOUNT'
      | 'POINTS_GOODS'
      | 'KANJIA'
      | 'COUPON_ACTIVITY';
    /** 促销id */
    promotionId?: string;
    /** 减免金额 */
    discountPrice?: number;
    /** 涉及 商品ID */
    goodsId?: string;
    /** 涉及 SKU ID */
    skuId?: string;
    promotionName?: string;
  };

  type edit1Params = {
    roleId: string;
    role: Role;
  };

  type edit2Params = {
    /** 菜单ID */
    id: string;
    menu: Menu;
  };

  type edit3Params = {
    roles?: string[];
  };

  type edit4Params = {
    /** 菜单ID */
    id: string;
    producingArea: ProducingArea;
  };

  type editOwnerParams = {
    adminUser: AdminUser;
  };

  type editParams = {
    id: string;
  };

  type editPasswordParams = {
    password: string;
    newPassword: string;
  };

  type enableParams = {
    id: string;
  };

  type File = {
    /** 原文件名 */
    name?: string;
    /** 存储文件名 */
    fileKey?: string;
    /** 大小 */
    fileSize?: number;
    /** 文件类型 */
    fileType?: string;
    /** 路径 */
    url?: string;
    /** 拥有者id */
    ownerId?: string;
    /** 用户类型 */
    userEnums?: string;
  };

  type get1Params = {
    purchaseOrderSearchParams: PurchaseOrderSearchParams;
  };

  type get2Params = {
    userId: string;
  };

  type get3Params = {
    roleId: string;
  };

  type get4Params = {
    departmentId: string;
  };

  type get5Params = {
    id: string;
  };

  type get6Params = {
    /** 会员ID */
    id: string;
  };

  type get7Params = {
    id: string;
  };

  type get8Params = {
    id: string;
  };

  type get9Params = {
    id: string;
  };

  type getAllByPageParams = {
    type?: number;
    searchKey: string;
    operatorName: string;
    searchVo: SearchVO;
    pageVo: PageVO;
  };

  type getAuthPageParams = {
    goodsSearchParams: GoodsSearchParams;
  };

  type getByConditionParams = {
    user: AdminUserDTO;
    searchVo: SearchVO;
    pageVo: PageVO;
  };

  type getByIdParams = {
    id: string;
  };

  type getByPage1Params = {
    entity: Department;
    searchVo: SearchVO;
  };

  type getByPage2Params = {
    memberSearchVO: MemberSearchVO;
    page: PageVO;
  };

  type getByPage3Params = {
    memberSearchVO: MemberSearchVO;
  };

  type getByPage4Params = {
    page: PageVO;
  };

  type getByPage5Params = {
    pageVO: PageVO;
  };

  type getByPage6Params = {
    goodsSearchParams: GoodsSearchParams;
  };

  type getByPage7Params = {
    page: BrandPageDTO;
  };

  type getByPageParams = {
    entity: StoreSearchParams;
    page: PageVO;
  };

  type getCategoryBrandListParams = {
    categoryId: string;
  };

  type getCategoryParamParams = {
    categoryId: string;
  };

  type getDetailParams = {
    /** 短信签名id */
    id: string;
  };

  type getFileListParams = {
    file: File;
    searchVO: SearchVO;
    pageVo: PageVO;
  };

  type getItemParams = {
    /** 地区ID */
    id: string;
  };

  type getPageDataParams = {
    id: string;
  };

  type getParams = {
    /** 地区ID */
    id: string;
  };

  type getPurchaseOrderParams = {
    /** 采购单ID */
    id: string;
  };

  type getSkuByPageParams = {
    goodsSearchParams: GoodsSearchParams;
  };

  type getSliderImageParams = {
    verificationEnums: 'LOGIN' | 'REGISTER' | 'FIND_USER' | 'UPDATE_PASSWORD' | 'WALLET_PASSWORD';
  };

  type getTracesParams = {
    orderSn: string;
  };

  type Goods = {
    /** 商品名称 */
    goodsName: string;
    /** 商品价格 */
    price: number;
    /** 品牌id */
    brandId?: string;
    /** 产地id */
    producerId?: string;
    /** 产地缩略名 */
    producerName?: string;
    /** 分类path */
    categoryPath?: string;
    /** 计量单位 */
    goodsUnit?: string;
    /** 卖点 */
    sellingPoint?: string;
    /** 上架状态 */
    marketEnable?: string;
    /** 详情 */
    intro?: string;
    /** 购买数量 */
    buyCount?: number;
    /** 库存 */
    quantity?: number;
    /** 商品好评率 */
    grade?: number;
    /** 缩略图路径 */
    thumbnail?: string;
    /** 小图路径 */
    small?: string;
    /** 原图路径 */
    original?: string;
    /** 店铺分类id */
    storeCategoryPath?: string;
    /** 评论数量 */
    commentNum?: number;
    /** 卖家id */
    storeId?: string;
    /** 卖家名字 */
    storeName?: string;
    /** 运费模板id */
    templateId?: string;
    /** 审核状态 */
    authFlag?: string;
    /** 审核信息 */
    authMessage?: string;
    /** 下架原因 */
    underMessage?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 是否有多个sku */
    hasSkus?: boolean;
    /** skuId */
    skuId?: string;
    /** 商品移动端详情 */
    mobileIntro?: string;
    /** 商品视频 */
    goodsVideo?: string;
    /** 是否为推荐商品 */
    recommend?: boolean;
    /** 销售模式 */
    salesModel: string;
    /** 分账比例 */
    splitRatio?: number;
    /** skuList */
    skuLists?: string;
    /** 商品类型 */
    goodsType: string;
  };

  type GoodsOperationDTO = {
    /** true */
    goodsId?: string;
    /** 商品价格 */
    price: number;
    /** 分账比例 */
    splitRatio: number;
    /** 分类path */
    categoryPath?: string;
    /** 店铺分类id */
    storeCategoryPath: string;
    /** 品牌id */
    brandId: string;
    /** 产地id */
    producerId: string;
    /** 商品名称 */
    goodsName: string;
    /** 详情 */
    intro?: string;
    /** 商品移动端详情 */
    mobileIntro?: string;
    /** 库存 */
    quantity?: number;
    /** 是否立即发布 */
    release?: boolean;
    /** 是否是推荐商品 */
    recommend?: boolean;
    /** 商品参数 */
    goodsParamsDTOList?: GoodsParamsDTO[];
    /** 商品图片 */
    goodsGalleryList?: string[];
    /** 运费模板id,不需要运费模板时值是0 */
    templateId: string;
    /** 卖点 */
    sellingPoint?: string;
    /** 销售模式 */
    salesModel: string;
    /** 销售模式 */
    goodsUnit: string;
    /** 商品描述 */
    info?: string;
    /** 是否重新生成sku数据 */
    regeneratorSkuFlag?: boolean;
    /** 商品类型 */
    goodsType?: string;
    /** 商品视频 */
    goodsVideo?: string;
    /** sku列表 */
    skuList?: Record<string, any>[];
    /** 是否为商品模版 */
    goodsTemplateFlag?: boolean;
    /** 批发商品规则 */
    wholesaleList?: WholesaleDTO[];
    /** 注意事项 */
    needingAttention?: string;
    /** 是否为年度会员专属 */
    annualFeeExclusive?: boolean;
    /** 浏览权限 */
    browsePermissions?: string;
  };

  type GoodsParamsDTO = {
    /** 分组id */
    groupId?: string;
    /** 分组名称 */
    groupName?: string;
    /** 分组内的商品参数列表 */
    goodsParamsItemDTOList?: GoodsParamsItemDTO[];
  };

  type GoodsParamsItemDTO = {
    /** 参数ID */
    paramId?: string;
    /** 参数名字 */
    paramName?: string;
    /** 参数值 */
    paramValue?: string;
    /** 是否可索引，0 不索引 1 索引 */
    isIndex?: number;
    /** 是否必填，0 不显示 1 显示 */
    required?: number;
    /** 排序 */
    sort?: number;
  };

  type GoodsSearchParams = {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
    /** 商品编号 */
    goodsId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 商品编号 */
    id?: string;
    /** 商家ID */
    storeId?: string;
    /** 卖家名字 */
    storeName?: string;
    /** 价格,可以为范围，如10_1000 */
    price?: string;
    /** 店铺分类id */
    storeCategoryPath?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 酒型ID */
    categoryId?: string;
    /** 香型ID */
    flavorId?: string;
    /** 品牌ID */
    brandId?: string;
    /** 产地ID */
    producerId?: string;
    /** 关键字 */
    keyword?: string;
    /** 上下架状态 */
    marketEnable?: string;
    /** 审核状态 */
    authFlag?: string;
    /** 库存数量 */
    leQuantity?: number;
    /** 库存数量 */
    geQuantity?: number;
    /** 是否为推荐商品 */
    recommend?: boolean;
    /** 商品类型 */
    goodsType?: string;
    /** 销售模式 */
    salesModel?: string;
  };

  type GoodsSku = {
    /** 商品id */
    goodsId?: string;
    /** 规格信息 */
    simpleSpecs?: string;
    /** 配送模版id */
    freightTemplateId?: string;
    /** 是否是促销商品 */
    promotionFlag?: boolean;
    /** 促销价 */
    promotionPrice?: number;
    /** 商品名称 */
    goodsName?: string;
    /** 商品编号 */
    sn?: string;
    /** 品牌id */
    brandId?: string;
    /** 分类path */
    categoryPath?: string;
    /** 计量单位 */
    goodsUnit?: string;
    /** 卖点 */
    sellingPoint?: string;
    /** 重量 */
    weight?: number;
    /** 上架状态 */
    marketEnable?: string;
    /** 商品详情 */
    intro?: string;
    /** 商品价格 */
    price?: number;
    /** 成本价格 */
    cost?: number;
    /** 浏览数量 */
    viewCount?: number;
    /** 购买数量 */
    buyCount?: number;
    /** 库存 */
    quantity?: number;
    /** 商品好评率 */
    grade?: number;
    /** 缩略图路径 */
    thumbnail?: string;
    /** 大图路径 */
    big?: string;
    /** 小图路径 */
    small?: string;
    /** 原图路径 */
    original?: string;
    /** 店铺分类id */
    storeCategoryPath?: string;
    /** 评论数量 */
    commentNum?: number;
    /** 卖家id */
    storeId?: string;
    /** 卖家名字 */
    storeName?: string;
    /** 运费模板id */
    templateId?: string;
    /** 审核状态 */
    authFlag?: string;
    /** 审核信息 */
    authMessage?: string;
    /** 下架原因 */
    underMessage?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 商品移动端详情 */
    mobileIntro?: string;
    /** 商品视频 */
    goodsVideo?: string;
    /** 是否为推荐商品 */
    recommend: boolean;
    /** 销售模式 */
    salesModel: string;
    /** 商品类型 */
    goodsType: string;
  };

  type GoodsSkuVO = {
    /** 商品id */
    goodsId?: string;
    /** 规格信息 */
    simpleSpecs?: string;
    /** 配送模版id */
    freightTemplateId?: string;
    /** 是否是促销商品 */
    promotionFlag?: boolean;
    /** 促销价 */
    promotionPrice?: number;
    /** 商品名称 */
    goodsName?: string;
    /** 商品编号 */
    sn?: string;
    /** 品牌id */
    brandId?: string;
    /** 分类path */
    categoryPath?: string;
    /** 计量单位 */
    goodsUnit?: string;
    /** 卖点 */
    sellingPoint?: string;
    /** 重量 */
    weight?: number;
    /** 上架状态 */
    marketEnable?: string;
    /** 商品详情 */
    intro?: string;
    /** 商品价格 */
    price?: number;
    /** 成本价格 */
    cost?: number;
    /** 浏览数量 */
    viewCount?: number;
    /** 购买数量 */
    buyCount?: number;
    /** 库存 */
    quantity?: number;
    /** 商品好评率 */
    grade?: number;
    /** 缩略图路径 */
    thumbnail?: string;
    /** 大图路径 */
    big?: string;
    /** 小图路径 */
    small?: string;
    /** 原图路径 */
    original?: string;
    /** 店铺分类id */
    storeCategoryPath?: string;
    /** 评论数量 */
    commentNum?: number;
    /** 卖家id */
    storeId?: string;
    /** 卖家名字 */
    storeName?: string;
    /** 运费模板id */
    templateId?: string;
    /** 审核状态 */
    authFlag?: string;
    /** 审核信息 */
    authMessage?: string;
    /** 下架原因 */
    underMessage?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 商品移动端详情 */
    mobileIntro?: string;
    /** 商品视频 */
    goodsVideo?: string;
    /** 是否为推荐商品 */
    recommend: boolean;
    /** 销售模式 */
    salesModel: string;
    /** 商品类型 */
    goodsType: string;
    /** 规格列表 */
    specList?: SpecValueVO[];
    /** 商品图片 */
    goodsGalleryList?: string[];
  };

  type GoodsUnit = {
    /** 计量单位名称 */
    name: string;
  };

  type GoodsVO = {
    /** 商品名称 */
    goodsName: string;
    /** 商品价格 */
    price: number;
    /** 品牌id */
    brandId?: string;
    /** 产地id */
    producerId?: string;
    /** 产地缩略名 */
    producerName?: string;
    /** 分类path */
    categoryPath?: string;
    /** 计量单位 */
    goodsUnit?: string;
    /** 卖点 */
    sellingPoint?: string;
    /** 上架状态 */
    marketEnable?: string;
    /** 详情 */
    intro?: string;
    /** 购买数量 */
    buyCount?: number;
    /** 库存 */
    quantity?: number;
    /** 商品好评率 */
    grade?: number;
    /** 缩略图路径 */
    thumbnail?: string;
    /** 小图路径 */
    small?: string;
    /** 原图路径 */
    original?: string;
    /** 店铺分类id */
    storeCategoryPath?: string;
    /** 评论数量 */
    commentNum?: number;
    /** 卖家id */
    storeId?: string;
    /** 卖家名字 */
    storeName?: string;
    /** 运费模板id */
    templateId?: string;
    /** 审核状态 */
    authFlag?: string;
    /** 审核信息 */
    authMessage?: string;
    /** 下架原因 */
    underMessage?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 是否有多个sku */
    hasSkus?: boolean;
    /** skuId */
    skuId?: string;
    /** 商品移动端详情 */
    mobileIntro?: string;
    /** 商品视频 */
    goodsVideo?: string;
    /** 是否为推荐商品 */
    recommend?: boolean;
    /** 销售模式 */
    salesModel: string;
    /** 分账比例 */
    splitRatio?: number;
    /** skuList */
    skuLists?: string;
    /** 商品类型 */
    goodsType: string;
    /** 分类名称 */
    categoryName?: string[];
    /** 商品参数 */
    goodsParamsDTOList?: GoodsParamsDTO[];
    /** 商品图片 */
    goodsGalleryList?: string[];
    /** sku列表 */
    skuList?: GoodsSkuVO[];
    /** 批发商品消费规则列表 */
    wholesaleList?: Wholesale[];
  };

  type guaranteeParams = {
    id: string;
    guarantees: string;
  };

  type IPageAdminUserVO = {
    total?: number;
    records?: AdminUserVO[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageBrand = {
    total?: number;
    records?: Brand[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageFile = {
    total?: number;
    records?: File[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageGoods = {
    total?: number;
    records?: Goods[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageGoodsSku = {
    total?: number;
    records?: GoodsSku[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageGoodsUnit = {
    total?: number;
    records?: GoodsUnit[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageLogistics = {
    total?: number;
    records?: Logistics[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageMemberVO = {
    total?: number;
    records?: MemberVO[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageOrderSimpleVO = {
    total?: number;
    records?: OrderSimpleVO[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPagePageDataListVO = {
    total?: number;
    records?: PageDataListVO[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageProducingArea = {
    total?: number;
    records?: ProducingArea[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPagePurchaseOrderVO = {
    total?: number;
    records?: PurchaseOrderVO[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageSmsSign = {
    total?: number;
    records?: SmsSign[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageSmsTemplate = {
    total?: number;
    records?: SmsTemplate[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type IPageStoreVO = {
    total?: number;
    records?: StoreVO[];
    current?: number;
    pages?: number;
    size?: number;
  };

  type listParams = {
    parentId: string;
  };

  type loginParams = {
    username: string;
    password: string;
  };

  type Logistics = {
    /** 物流公司名称 */
    name: string;
    /** 物流公司code */
    code: string;
    /** 支持电子面单 */
    standBy?: string;
    /** 物流公司电子面单表单 */
    formItems?: string;
    /** 禁用状态 OPEN：开启，CLOSE：禁用 */
    disabled?: string;
  };

  type ManagerMemberEditDTO = {
    id: string;
    /** 会员用户名,用户名不能进行修改 */
    username: string;
    /** 会员密码 */
    password?: string;
    /** 昵称 */
    nickName?: string;
    /** 地区 */
    region?: string;
    /** 地区ID */
    regionId?: string;
    /** 会员性别,1为男，0为女 */
    sex: number;
    /** 会员生日 */
    birthday?: string;
    /** 会员头像 */
    face?: string;
  };

  type Member = {
    /** 会员用户名 */
    username?: string;
    /** 会员密码 */
    password?: string;
    /** 昵称 */
    nickName?: string;
    /** 会员性别,1为男，0为女 */
    sex?: number;
    /** 会员生日 */
    birthday?: string;
    /** 会员地址ID */
    regionId?: string;
    /** 会员地址 */
    region?: string;
    /** 手机号码 */
    mobile: string;
    /** 积分数量 */
    point?: number;
    /** 积分总数量 */
    totalPoint?: number;
    /** 会员头像 */
    face?: string;
    /** 会员状态 */
    disabled?: boolean;
    /** 是否开通店铺 */
    haveStore?: boolean;
    /** 店铺ID */
    storeId?: string;
    /** 客户端 */
    clientEnum?: string;
    /** 最后一次登录时间 */
    lastLoginDate?: string;
    /** 会员等级ID */
    gradeId?: string;
    /** 经验值数量 */
    experience?: number;
  };

  type MemberAddDTO = {
    /** 会员用户名 */
    username: string;
    /** 会员密码 */
    password?: string;
    /** 手机号码 */
    mobile: string;
  };

  type MemberAddressDTO = {
    /** 收货人姓名 */
    consigneeName: string;
    /** 手机号码 */
    consigneeMobile?: string;
    /** 地址名称， '，'分割 */
    consigneeAddressPath: string;
    /** 地址id，'，'分割  */
    consigneeAddressIdPath: string;
    /** 详细地址 */
    consigneeDetail: string;
  };

  type MemberSearchVO = {
    /** 用户名 */
    username?: string;
    /** 昵称 */
    nickName?: string;
    /** 用户手机号码 */
    mobile?: string;
    /** 会员状态 */
    disabled?: string;
  };

  type MemberVO = {
    /** username */
    username?: string;
    /** 昵称 */
    nickName?: string;
    /** 会员性别,1为男，0为女 */
    sex?: number;
    /** 会员生日 */
    birthday?: string;
    /** 会员地址ID */
    regionId?: string;
    /** 会员地址 */
    region?: string;
    /** 手机号码 */
    mobile: string;
    /** 积分数量 */
    point?: number;
    /** 积分总数量 */
    totalPoint?: number;
    /** 会员头像 */
    face?: string;
    /** 会员状态 */
    disabled?: boolean;
    /** 是否开通店铺 */
    haveStore?: boolean;
    /** 店铺ID */
    storeId?: string;
    /** openId */
    openId?: string;
    /** 客户端 */
    clientEnum?: string;
    /** 最后一次登录时间 */
    lastLoginDate?: string;
    /** 会员等级ID */
    gradeId?: string;
    /** 经验值数量 */
    experience?: number;
  };

  type Menu = {
    /** 菜单标题 */
    title?: string;
    /** 路由名称 */
    name?: string;
    /** 路径 */
    path?: string;
    /** 菜单层级 */
    level?: number;
    /** 前端目录文件 */
    frontRoute?: string;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    sortOrder?: number;
    /** 权限URL，*号模糊匹配，逗号分割 */
    permission?: string;
  };

  type MenuSearchParams = {
    /** 菜单/权限名称 */
    name?: string;
    /** 层级 */
    level?: number;
    /** 菜单标题 */
    title?: string;
    /** 赋权API地址,正则表达式 */
    path?: string;
    /** 前端路由 */
    frontRoute?: string;
    /** 图标 */
    icon?: string;
  };

  type MenuVO = {
    /** 菜单标题 */
    title?: string;
    /** 路由名称 */
    name?: string;
    /** 路径 */
    path?: string;
    /** 菜单层级 */
    level?: number;
    /** 前端目录文件 */
    frontRoute?: string;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    sortOrder?: number;
    /** 权限URL，*号模糊匹配，逗号分割 */
    permission?: string;
    /** 子菜单 */
    children?: MenuVO[];
  };

  type Order = {
    /** 订单编号 */
    sn?: string;
    /** 交易编号 关联Trade */
    tradeSn?: string;
    /** 店铺ID */
    storeId?: string;
    /** 店铺名称 */
    storeName?: string;
    /** 会员ID */
    memberId?: string;
    /** 用户名 */
    memberName?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 付款状态 */
    payStatus?: string;
    /** 货运状态 */
    deliverStatus?: string;
    /** 第三方付款流水号 */
    receivableNo?: string;
    /** 支付方式 */
    paymentMethod?: string;
    /** 支付时间 */
    paymentTime?: string;
    /** 收件人姓名 */
    consigneeName?: string;
    /** 收件人手机 */
    consigneeMobile?: string;
    /** 配送方式 */
    deliveryMethod?: string;
    /** 地址名称， '，'分割 */
    consigneeAddressPath?: string;
    /** 地址id，'，'分割  */
    consigneeAddressIdPath?: string;
    /** 详细地址 */
    consigneeDetail?: string;
    /** 总价格 */
    flowPrice?: number;
    /** 商品价格 */
    goodsPrice?: number;
    /** 运费 */
    freightPrice?: number;
    /** 优惠的金额 */
    discountPrice?: number;
    /** 修改价格 */
    updatePrice?: number;
    /** 发货单号 */
    logisticsNo?: string;
    /** 物流公司CODE */
    logisticsCode?: string;
    /** 物流公司名称 */
    logisticsName?: string;
    /** 订单商品总重量 */
    weight?: number;
    /** 商品数量 */
    goodsNum?: number;
    /** 买家订单备注 */
    remark?: string;
    /** 订单取消原因 */
    cancelReason?: string;
    /** 完成时间 */
    completeTime?: string;
    /** 送货时间 */
    logisticsTime?: string;
    /** 支付方式返回的交易号 */
    payOrderNo?: string;
    /** 订单来源 */
    clientType?: string;
    /** 是否需要发票 */
    needReceipt?: boolean;
    /** 是否为其他订单下的订单，如果是则为依赖订单的sn，否则为空 */
    parentOrderSn?: string;
    /** 是否为某订单类型的订单，如果是则为订单类型的id，否则为空 */
    promotionId?: string;
    /** 订单类型 */
    orderType?: string;
    /** 订单促销类型 */
    orderPromotionType?: string;
    /** 价格价格详情 */
    priceDetail?: string;
    /** 订单是否支持原路退回 */
    canReturn?: boolean;
    /** 提货码 */
    verificationCode?: string;
    /** 分销员ID */
    distributionId?: string;
    /** 使用的店铺会员优惠券id(,区分) */
    useStoreMemberCouponIds?: string;
    /** 使用的平台会员优惠券id */
    usePlatformMemberCouponId?: string;
    /** qrCode  实物为提货码  虚拟货物为账号 */
    qrCode?: string;
    /** 自提点地址 */
    storeAddressPath?: string;
    /** 自提点电话 */
    storeAddressMobile?: string;
    /** 自提点地址经纬度 */
    storeAddressCenter?: string;
    /** 询价单id */
    purchaseOrderId?: string;
    priceDetailDTO?: PriceDetailDTO;
  };

  type OrderDetailVO = {
    order?: Order;
    unit?: string;
    num?: string;
    orderItems?: OrderItem[];
    orderStatusValue?: string;
    payStatusValue?: string;
    deliverStatusValue?: string;
    deliveryMethodValue?: string;
    paymentMethodValue?: string;
    receipt?: Receipt;
    orderLogs?: OrderLog[];
    /** 价格详情 */
    priceDetail?: string;
    allowOperationVO?: AllowOperation;
  };

  type OrderExportDTO = {
    /** 订单编号 */
    sn?: string;
    /** 创建时间 */
    createTime?: string;
    /** 用户名 */
    memberName?: string;
    /** 收件人姓名 */
    consigneeName?: string;
    /** 收件人手机 */
    consigneeMobile?: string;
    /** 收件人地址 */
    consigneeAddressPath?: string;
    /** 详细地址 */
    consigneeDetail?: string;
    /** 支付方式 */
    paymentMethod?: string;
    /** 物流公司名称 */
    logisticsName?: string;
    /** 运费 */
    freightPrice?: number;
    /** 商品价格 */
    goodsPrice?: number;
    /** 优惠的金额 */
    discountPrice?: number;
    /** 总价格 */
    flowPrice?: number;
    /** 商品名称 */
    goodsName?: string;
    /** 商品数量 */
    num?: number;
    /** 买家订单备注 */
    remark?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 付款状态 */
    payStatus?: string;
    /** 货运状态 */
    deliverStatus?: string;
    /** 是否需要发票 */
    needReceipt?: boolean;
    /** 店铺名称 */
    storeName?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type OrderItemVO = {
    /** 编号 */
    sn?: string;
    /** 商品ID */
    goodsId?: string;
    /** 货品ID */
    skuId?: string;
    /** 销售量 */
    num?: string;
    /** 图片 */
    image?: string;
    /** 商品名称 */
    name?: string;
    goodsPrice?: number;
    /** 售后状态 */
    afterSaleStatus?: 'NOT_APPLIED(未申请),ALREADY_APPLIED(已申请),EXPIRED(已失效不允许申请售后)';
    /** 投诉状态 */
    complainStatus?: string;
    /** 评论状态:未评论(UNFINISHED),待追评(WAIT_CHASE),评论完成(FINISHED)， */
    commentStatus?: string;
  };

  type OrderLog = {
    /** 订单编号 */
    orderSn?: string;
    /** 操作者id(可以是卖家) */
    operatorId?: string;
    /** 操作者类型 */
    operatorType?: string;
    /** 操作者名称 */
    operatorName?: string;
    /** 日志信息 */
    message?: string;
  };

  type OrderSearchParams = {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
    /** 商品名称 */
    goodsName?: string;
    /** 订单编号 */
    orderSn?: string;
    /** 页面标签 */
    tag?: string;
    /** 商家ID */
    storeId?: string;
    /** 会员ID */
    memberId?: string;
    /** 收货人 */
    shipName?: string;
    /** 买家昵称 */
    buyerName?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 付款状态 */
    payStatus?: string;
    /** 关键字 商品名称/买家名称/店铺名称 */
    keywords?: string;
    /** 付款方式 */
    paymentType?: string;
    /** 订单类型 */
    orderType?: 'NORMAL,VIRTUAL,GIFT,PINTUAN,POINT';
    /** 支付方式 */
    paymentMethod?: string;
    /** 支付时间 */
    paymentTime?: string;
    /** 下单开始时间 */
    startDate?: string;
    /** 下单结束时间 */
    endDate?: string;
    /** 订单来源 */
    clientType?: string;
    /** 评论状态:未评论(UNFINISHED),待追评(WAIT_CHASE),评论完成(FINISHED)， */
    commentStatus?: string;
    /** 是否为其他订单下的订单，如果是则为依赖订单的sn，否则为空 */
    parentOrderSn?: string;
    /** 是否为某订单类型的订单，如果是则为订单类型的id，否则为空 */
    promotionId?: string;
    /** 总价格,可以为范围，如10_1000 */
    flowPrice?: string;
    /** 订单促销类型 */
    orderPromotionType?: string;
  };

  type OrderSimpleVO = {
    /** sn */
    sn?: string;
    /** 总价格 */
    flowPrice?: number;
    /** 创建时间 */
    createTime?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 付款状态 */
    payStatus?: string;
    /** 支付方式 */
    paymentMethod?: string;
    /** 支付时间 */
    paymentTime?: string;
    /** 用户名 */
    memberName?: string;
    /** 店铺名称 */
    storeName?: string;
    /** 店铺ID */
    storeId?: string;
    /** 订单来源 */
    clientType?: string;
    orderItems?: OrderItemVO[];
    /** 订单类型 */
    orderType?: string;
    /** 货运状态 */
    deliverStatus?: string;
    /** 订单促销类型 */
    orderPromotionType?: string;
    allowOperationVO?: AllowOperation;
  };

  type PageData = {
    /** 页面名称 */
    name?: string;
    /** 页面数据 */
    pageData?: string;
    /** 页面开关状态 */
    pageShow?: 'OPEN,CLOSE';
    /** 页面类型 */
    pageType?: 'INDEX,STORE,SPECIAL';
    /** 客户端类型 */
    pageClientType?: 'PC,H5,WECHAT_MP,APP';
    /** 值 */
    num?: string;
  };

  type PageDataDTO = {
    /** 值 */
    num?: string;
    /** 页面类型 */
    pageType?: 'INDEX,STORE,SPECIAL';
    /** 客户端类型 */
    pageClientType?: 'PC,H5,WECHAT_MP,APP';
  };

  type pageDataListParams = {
    pageVO: PageVO;
    pageDataDTO: PageDataDTO;
  };

  type PageDataListVO = {
    /** 页面ID */
    id?: string;
    /** 页面名称 */
    name?: string;
    /** 页面开关状态 */
    pageShow?: 'OPEN,CLOSE';
  };

  type PageObject = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: number;
    pages?: number;
  };

  type pageParams = {
    entity: ProducingArea;
    searchVo: SearchVO;
    page: PageVO;
  };

  type PageVO = {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
  };

  type ParameterGroupVO = {
    /** 参数组关联的参数集合 */
    params?: Parameters[];
    /** 参数组名称 */
    groupName?: string;
    /** 参数组id */
    groupId?: string;
  };

  type Parameters = {
    /** 参数名称 */
    paramName: string;
    /** 选择值 */
    options: string;
    /** 是否可索引，0 不显示 1 显示 */
    isIndex: number;
    /** 是否必填是  1    否   0 */
    required: number;
    /** 参数分组id */
    groupId: string;
  };

  type payOrderParams = {
    orderSn: string;
  };

  type PriceDetailDTO = {
    /** 订单原始总价格 */
    originalPrice?: number;
    /** 商品总金额（商品原价） */
    goodsPrice?: number;
    /** 配送费 */
    freightPrice?: number;
    /** 支付积分 */
    payPoint?: number;
    /** 优惠金额 */
    discountPrice?: number;
    /** 优惠详情 */
    discountPriceDetail?: DiscountPriceItem[];
    /** 优惠券金额 */
    couponPrice?: number;
    /** 单品分销返现支出 */
    distributionCommission?: number;
    /** 平台收取交易佣金比例 */
    platFormCommissionPoint?: number;
    /** 平台收取交易佣金=(flowPrice(流水金额) * platFormCommissionPoint(平台佣金比例))/100 */
    platFormCommission?: number;
    /** 平台优惠券 使用金额 */
    siteCouponPrice?: number;
    /** 站点优惠券佣金比例 */
    siteCouponPoint?: number;
    /** 站点优惠券佣金 */
    siteCouponCommission?: number;
    /** 订单修改金额 */
    updatePrice?: number;
    /** 流水金额(入账 出帐金额) = goodsPrice(商品总金额（商品原价）) + freightPrice(配送费) - discountPrice(优惠金额) - couponPrice(优惠券金额) + updatePrice(订单修改金额) */
    flowPrice?: number;
    /** 结算价格 与 商家/供应商 结算价格（例如积分商品/砍价商品） */
    settlementPrice?: number;
    /** 最终结算金额 = flowPrice(流水金额) - platFormCommission(平台收取交易佣金) - distributionCommission(单品分销返现支出) */
    billPrice?: number;
    /** 参与的促销活动 */
    joinPromotion?: PromotionSkuVO[];
    discountPriceItem?: DiscountPriceItem;
  };

  type ProducingArea = {
    /** 缩略名 */
    producerName?: string;
    /** 省份 */
    province?: string;
    /** 地级市 */
    city?: string;
    /** 层级 */
    level?: number;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    rank?: number;
  };

  type ProducingAreaSearchParams = {
    /** 省份 */
    province?: string;
    /** 地级市 */
    city?: string;
  };

  type ProducingAreaVO = {
    /** 缩略名 */
    producerName?: string;
    /** 省份 */
    province?: string;
    /** 地级市 */
    city?: string;
    /** 层级 */
    level?: number;
    /** 父id */
    parentId?: string;
    /** 排序值 */
    rank?: number;
    children?: ProducingAreaVO[];
  };

  type PromotionSkuVO = {
    promotionType?: string;
    activityId?: string;
  };

  type PurchaseOrderItem = {
    /** 采购ID */
    purchaseOrderId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 采购数量 */
    num?: string;
    /** 每箱个数 */
    goodsUnit?: string;
    /** 单位 */
    unit?: string;
    /** 价格 */
    price?: number;
    /** 规格 */
    specs?: string;
    /** 图片 */
    images?: string;
    /** goodsId */
    goodsId?: string;
    /** skuId */
    skuId?: string;
  };

  type PurchaseOrderSearchParams = {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
    /** id */
    id?: string;
    /** 会员ID */
    memberId?: string;
    /** tradeSn */
    tradeSn?: string;
    /** 分类ID */
    categoryId?: string;
    /** 状态，开启：OPEN，关闭：CLOSE */
    status?: string;
    /** 分类 idList */
    categoryIdList?: string[];
  };

  type PurchaseOrderVO = {
    /** 标题 */
    title?: string;
    /** tradeSn */
    tradeSn?: string;
    /** 截止时间 */
    deadline?: string;
    /** 收货时间 */
    receiptTime?: string;
    /** 价格类型 可议价、不可议价、面议 */
    priceMethod?: string;
    /** 地址名称， '，'分割 */
    consigneeAddressPath?: string;
    /** 地址id，'，'分割  */
    consigneeAddressIdPath?: string;
    /** 是否需要发票 */
    needReceipt?: boolean;
    /** 补充说明 */
    supplement?: string;
    /** 联系类型联系方式什么时候可见 公开后、公开 */
    contactType?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 供求人 */
    memberId?: string;
    /** 状态，开启：OPEN，关闭：CLOSE */
    status?: string;
    /** 分类ID */
    categoryId?: string;
    /** 分类名称 */
    categoryName?: string;
    /** 排位 */
    rank?: string;
    children?: PurchaseQuoted[];
    purchaseOrderItems?: PurchaseOrderItem[];
    quotedVOList?: PurchaseQuotedVO[];
  };

  type PurchaseQuoted = {
    /** 采购单ID */
    purchaseOrderId?: string;
    /** 标题 */
    title?: string;
    /** 报价说明 */
    context?: string;
    /** 附件 */
    annex?: string;
    /** 公司名称 */
    companyName?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 报价人 */
    memberId?: string;
    /** 排位 */
    rank?: string;
  };

  type PurchaseQuotedItem = {
    /** goodsId */
    goodsId?: string;
    /** skuId */
    skuId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 规格 */
    specs?: string;
    /** 数量 */
    num?: string;
    /** 数量单位 */
    goodsUnit?: string;
    /** 价格 */
    price?: number;
    /** wineTime */
    wineTime?: string;
    /** 是否赠品 */
    giftFlag?: boolean;
    purchaseQuotedId?: string;
  };

  type PurchaseQuotedVO = {
    /** 采购单ID */
    purchaseOrderId?: string;
    /** 标题 */
    title?: string;
    /** 报价说明 */
    context?: string;
    /** 附件 */
    annex?: string;
    /** 公司名称 */
    companyName?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 报价人 */
    memberId?: string;
    /** 排位 */
    rank?: string;
    /** 地址名称， '，'分割 */
    consigneeAddressPath?: string;
    /** 地址id，'，'分割  */
    consigneeAddressIdPath?: string;
    /** 单位 */
    unit?: string;
    purchaseQuotedItems?: PurchaseQuotedItem[];
  };

  type queryExportOrderParams = {
    orderSearchParams: OrderSearchParams;
  };

  type queryMineOrderParams = {
    orderSearchParams: OrderSearchParams;
  };

  type querySmsSignPageParams = {
    page: PageVO;
    signStatus: number;
  };

  type querySmsTemplatePageParams = {
    page: PageVO;
    templateStatus: number;
  };

  type rankParams = {
    /** 采购单ID */
    id: string;
    rankValue: number;
  };

  type Receipt = {
    /** 订单编号 */
    orderSn?: string;
    /** 发票抬头 */
    receiptTitle?: string;
    /** 纳税人识别号 */
    taxpayerId?: string;
    /** 发票内容 */
    receiptContent?: string;
    /** 发票金额 */
    receiptPrice?: number;
    /** 会员ID */
    memberId?: string;
    /** 会员名称 */
    memberName?: string;
    /** 商家ID */
    storeId?: string;
    /** 商家名称 */
    storeName?: string;
    /** 发票状态 0未开 1已开 */
    receiptStatus?: number;
    /** 发票详情 */
    receiptDetail?: string;
  };

  type refreshTokenParams = {
    refreshToken: string;
  };

  type Region = {
    /** 父id */
    parentId: string;
    /** 区域编码 */
    adCode: string;
    /** 城市代码 */
    cityCode?: string;
    /** 区域中心点经纬度 */
    center: string;
    /** 行政区划级别country:国家province:省份（直辖市会在province和city显示）city:市（直辖市会在province和city显示）district:区县street:街道 */
    level: string;
    /** 名称 */
    name: string;
    /** 行政地区路径，类似：1，2，3  */
    path: string;
    /** 排序 */
    orderNum: number;
  };

  type registerParams = {
    roles?: string[];
  };

  type releaseParams = {
    id: string;
  };

  type removeParams = {
    id: string;
  };

  type resetPasswordParams = {
    ids: Record<string, any>[];
  };

  type ResultMessage = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: Record<string, any>;
  };

  type ResultMessageAdminUser = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: AdminUser;
  };

  type ResultMessageBrand = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Brand;
  };

  type ResultMessageBrandVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: BrandVO;
  };

  type ResultMessageCategory = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Category;
  };

  type ResultMessageCategoryParameterGroup = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: CategoryParameterGroup;
  };

  type ResultMessageDepartment = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Department;
  };

  type ResultMessageDepartmentRole = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: DepartmentRole;
  };

  type ResultMessageFile = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: File;
  };

  type ResultMessageGoodsOperationDTO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: GoodsOperationDTO;
  };

  type ResultMessageGoodsUnit = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: GoodsUnit;
  };

  type ResultMessageGoodsVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: GoodsVO;
  };

  type ResultMessageIPageAdminUserVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageAdminUserVO;
  };

  type ResultMessageIPageBrand = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageBrand;
  };

  type ResultMessageIPageFile = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageFile;
  };

  type ResultMessageIPageGoods = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageGoods;
  };

  type ResultMessageIPageGoodsSku = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageGoodsSku;
  };

  type ResultMessageIPageGoodsUnit = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageGoodsUnit;
  };

  type ResultMessageIPageLogistics = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageLogistics;
  };

  type ResultMessageIPageMemberVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageMemberVO;
  };

  type ResultMessageIPageOrderSimpleVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageOrderSimpleVO;
  };

  type ResultMessageIPagePageDataListVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPagePageDataListVO;
  };

  type ResultMessageIPageProducingArea = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageProducingArea;
  };

  type ResultMessageIPagePurchaseOrderVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPagePurchaseOrderVO;
  };

  type ResultMessageIPageSmsSign = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageSmsSign;
  };

  type ResultMessageIPageSmsTemplate = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageSmsTemplate;
  };

  type ResultMessageIPageStoreVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: IPageStoreVO;
  };

  type ResultMessageListCategory = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: Category[];
  };

  type ResultMessageListCategoryBrandVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: CategoryBrandVO[];
  };

  type ResultMessageListCategoryVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: CategoryVO[];
  };

  type ResultMessageListDepartmentRole = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: DepartmentRole[];
  };

  type ResultMessageListDepartmentVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: DepartmentVO[];
  };

  type ResultMessageListMenu = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: Menu[];
  };

  type ResultMessageListMenuVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: MenuVO[];
  };

  type ResultMessageListOrderExportDTO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: OrderExportDTO[];
  };

  type ResultMessageListParameterGroupVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: ParameterGroupVO[];
  };

  type ResultMessageListProducingArea = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: ProducingArea[];
  };

  type ResultMessageListProducingAreaVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: ProducingAreaVO[];
  };

  type ResultMessageListRegion = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: Region[];
  };

  type ResultMessageListRoleMenu = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: RoleMenu[];
  };

  type ResultMessageListStore = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: Store[];
  };

  type ResultMessageListString = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: string[];
  };

  type ResultMessageLogistics = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Logistics;
  };

  type ResultMessageLong = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: number;
  };

  type ResultMessageMapStringLong = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: Record<string, any>;
  };

  type ResultMessageMember = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Member;
  };

  type ResultMessageMemberVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: MemberVO;
  };

  type ResultMessageMenu = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Menu;
  };

  type ResultMessageObject = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: Record<string, any>;
  };

  type ResultMessageOrder = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Order;
  };

  type ResultMessageOrderDetailVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: OrderDetailVO;
  };

  type ResultMessagePageData = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: PageData;
  };

  type ResultMessagePageObject = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: PageObject;
  };

  type ResultMessageParameters = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Parameters;
  };

  type ResultMessageProducingArea = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: ProducingArea;
  };

  type ResultMessagePurchaseOrderVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: PurchaseOrderVO;
  };

  type ResultMessageRegion = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Region;
  };

  type ResultMessageRole = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Role;
  };

  type ResultMessageSmsSign = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: SmsSign;
  };

  type ResultMessageSmsTemplate = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: SmsTemplate;
  };

  type ResultMessageStore = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Store;
  };

  type ResultMessageStoreDetailVO = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: StoreDetailVO;
  };

  type ResultMessageString = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    /** 结果对象 */
    result?: string;
  };

  type ResultMessageToken = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: Token;
  };

  type ResultMessageUserRole = {
    /** 成功标志 */
    success?: boolean;
    /** 消息 */
    message?: string;
    /** 返回代码 */
    code?: number;
    /** 时间戳 */
    timestamp?: number;
    result?: UserRole;
  };

  type Role = {
    /** 角色名 */
    name?: string;
    /** 是否为注册默认角色 */
    defaultRole?: boolean;
    /** 备注 */
    description?: string;
  };

  type RoleMenu = {
    /** 角色id */
    roleId?: string;
    /** 菜单 */
    menuId?: string;
    /** 是否拥有操作数据权限，为否则只有查看权限 */
    isSuper?: boolean;
  };

  type save3Params = {
    roleId: string;
  };

  type saveConfigParams = {
    key: string;
  };

  type searchPermissionList1Params = {
    searchParams: ProducingAreaSearchParams;
  };

  type searchPermissionListParams = {
    searchParams: MenuSearchParams;
  };

  type SearchVO = {
    selecte?: Record<string, any>;
    startDate?: string;
    endDate?: string;
    convertStartDate?: string;
    convertEndDate?: string;
  };

  type setCarouselListParams = {
    /** 关联的酒水ID */
    id: string;
  };

  type settingGetParams = {
    key: string;
  };

  type SmsSign = {
    /** 签名名称 */
    signName: string;
    /** 签名来源 */
    signSource: number;
    /** 短信签名申请说明 */
    remark: string;
    /** 营业执照 */
    businessLicense: string;
    /** 授权委托书 */
    license: string;
    /** 签名审核状态 */
    signStatus?: number;
    /** 审核备注 */
    reason?: string;
  };

  type SmsTemplate = {
    /** 模板名称 */
    templateName?: string;
    /** 短信类型 */
    templateType?: number;
    /** 短信模板申请说明 */
    remark?: string;
    /** 模板内容 */
    templateContent?: string;
    /** 模板审核状态 */
    templateStatus?: number;
    /** 短信模板CODE */
    templateCode?: string;
    /** 审核备注 */
    reason?: string;
  };

  type SpecImages = {
    url?: string;
    name?: string;
    status?: string;
  };

  type SpecValueVO = {
    /** 规格项名字 */
    specName?: string;
    /** 规格值 */
    specValue?: string;
    /** 该规格是否有图片，1 有 0 没有 */
    specType?: number;
    /** 规格的图片 */
    specImage?: SpecImages[];
  };

  type Store = {
    /** 会员Id */
    memberId?: string;
    /** tradeId */
    tradeId?: string;
    /** guarantees_price */
    guaranteesPrice?: string;
    /** 会员名称 */
    memberName?: string;
    /** 店铺名称 */
    storeName?: string;
    /** storeJson */
    storeJson?: string;
    /** 店铺关闭时间 */
    storeEndTime?: string;
    /** 店铺状态 */
    storeDisable?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 店铺logo */
    storeLogo?: string;
    /** 经纬度 */
    storeCenter: string;
    /** 店铺简介 */
    storeDesc: string;
    /** 地址名称， '，'分割 */
    storeAddressPath?: string;
    /** 地址id，'，'分割  */
    storeAddressIdPath?: string;
    /** 详细地址 */
    storeAddressDetail?: string;
    /** 描述评分 */
    descriptionScore?: number;
    /** 服务评分 */
    serviceScore?: number;
    /** 物流评分 */
    deliveryScore?: number;
    /** 商品数量 */
    goodsNum?: number;
    /** 收藏数量 */
    collectionNum?: number;
    /** 腾讯云智服唯一标识 */
    yzfSign?: string;
    /** 腾讯云智服小程序唯一标识 */
    yzfMpSign?: string;
    /** udesk IM标识 */
    merchantEuid?: string;
    /** monthSales */
    monthSales?: string;
    /** type */
    type?: 'MIDDLEMAN' | 'MANUFACTURERS';
    /** discountedPrice */
    discountedPrice?: string;
    /** originalPrice */
    originalPrice?: string;
    /** 默认页面是否开启 */
    pageShow?: boolean;
    /** 是否开启自提 */
    selfPickFlag?: boolean;
  };

  type StoreDetailVO = {
    /** tradeId */
    tradeId?: string;
    /** guarantees_price */
    guaranteesPrice?: string;
    /** 店铺id */
    storeId: string;
    /** storeJson */
    storeJson?: string;
    /** type */
    type?: string;
    /** 店铺名称 */
    storeName: string;
    /** 公司名称 */
    companyName: string;
    /** 公司地址 */
    companyAddress: string;
    /** 公司地址地区Id */
    companyAddressIdPath?: string;
    /** 公司地址地区 */
    companyAddressPath?: string;
    /** 公司电话 */
    companyPhone?: string;
    /** 电子邮箱 */
    companyEmail?: string;
    /** 员工总数 */
    employeeNum?: number;
    /** 注册资金 */
    registeredCapital?: number;
    /** 联系人姓名 */
    linkName: string;
    /** 联系人电话 */
    linkPhone: string;
    /** 营业执照号 */
    licenseNum?: string;
    /** 法定经营范围 */
    scope?: string;
    /** 营业执照电子版 */
    licencePhoto: string;
    /** 法人姓名 */
    legalName: string;
    /** 法人身份证 */
    legalId: string;
    /** 法人身份证照片 */
    legalPhoto: string;
    /** 结算银行开户行名称 */
    settlementBankAccountName: string;
    /** 结算银行开户账号 */
    settlementBankAccountNum: string;
    /** 结算银行开户支行名称 */
    settlementBankBranchName: string;
    /** 结算银行支行联行号 */
    settlementBankJointName: string;
    /** 店铺经营类目 */
    goodsManagementCategory: string;
    /** 结算周期 */
    settlementCycle?: string;
    /** 库存预警数量 */
    stockWarning?: number;
    /** 同城配送达达店铺编码 */
    ddCode?: string;
    /** 收货人姓名 */
    salesConsigneeName?: string;
    /** 收件人手机 */
    salesConsigneeMobile?: string;
    /** 地址Id， '，'分割 */
    salesConsigneeAddressId?: string;
    /** 地址名称， '，'分割 */
    salesConsigneeAddressPath?: string;
    /** 详细地址 */
    salesConsigneeDetail?: string;
    /** 店铺状态 */
    storeDisable?: string;
    /** 是否自营 */
    selfOperated: boolean;
    /** 经纬度 */
    storeCenter?: string;
    /** 店铺logo */
    storeLogo?: string;
    /** 店铺简介 */
    storeDesc: string;
    /** 地址名称， '，'分割 */
    storeAddressPath?: string;
    /** 地址id，'，'分割  */
    storeAddressIdPath?: string;
    /** 详细地址 */
    storeAddressDetail?: string;
    /** 腾讯云智服唯一标识 */
    yzfSign?: string;
    /** 腾讯云智服小程序唯一标识 */
    yzfMpSign?: string;
    /** 会员名称 */
    memberName?: string;
  };

  type StoreEditDTO = {
    /** tradeId */
    tradeId?: string;
    /** guarantees_price */
    guaranteesPrice?: string;
    /** 店铺id */
    storeId: string;
    /** storeJson */
    storeJson?: string;
    /** type */
    type?: string;
    /** 店铺名称 */
    storeName: string;
    /** 公司名称 */
    companyName: string;
    /** 公司地址 */
    companyAddress: string;
    /** 公司地址地区Id */
    companyAddressIdPath?: string;
    /** 公司地址地区 */
    companyAddressPath?: string;
    /** 公司电话 */
    companyPhone?: string;
    /** 电子邮箱 */
    companyEmail?: string;
    /** 员工总数 */
    employeeNum?: number;
    /** 注册资金 */
    registeredCapital?: number;
    /** 联系人姓名 */
    linkName: string;
    /** 联系人电话 */
    linkPhone: string;
    /** 营业执照号 */
    licenseNum?: string;
    /** 法定经营范围 */
    scope?: string;
    /** 营业执照电子版 */
    licencePhoto: string;
    /** 法人姓名 */
    legalName: string;
    /** 法人身份证 */
    legalId: string;
    /** 法人身份证照片 */
    legalPhoto: string;
    /** 结算银行开户行名称 */
    settlementBankAccountName: string;
    /** 结算银行开户账号 */
    settlementBankAccountNum: string;
    /** 结算银行开户支行名称 */
    settlementBankBranchName: string;
    /** 结算银行支行联行号 */
    settlementBankJointName: string;
    /** 店铺经营类目 */
    goodsManagementCategory: string;
    /** 结算周期 */
    settlementCycle?: string;
    /** 库存预警数量 */
    stockWarning?: number;
    /** 同城配送达达店铺编码 */
    ddCode?: string;
    /** 收货人姓名 */
    salesConsigneeName?: string;
    /** 收件人手机 */
    salesConsigneeMobile?: string;
    /** 地址Id， '，'分割 */
    salesConsigneeAddressId?: string;
    /** 地址名称， '，'分割 */
    salesConsigneeAddressPath?: string;
    /** 详细地址 */
    salesConsigneeDetail?: string;
    /** 店铺状态 */
    storeDisable?: string;
    /** 是否自营 */
    selfOperated: boolean;
    /** 经纬度 */
    storeCenter?: string;
    /** 店铺logo */
    storeLogo?: string;
    /** 店铺简介 */
    storeDesc: string;
    /** 地址名称， '，'分割 */
    storeAddressPath?: string;
    /** 地址id，'，'分割  */
    storeAddressIdPath?: string;
    /** 详细地址 */
    storeAddressDetail?: string;
    /** 腾讯云智服唯一标识 */
    yzfSign?: string;
    /** 腾讯云智服小程序唯一标识 */
    yzfMpSign?: string;
  };

  type StoreSearchParams = {
    pageNumber?: number;
    pageSize?: number;
    sort?: string;
    order?: string;
    notConvert?: boolean;
    /** 会员名称 */
    memberName?: string;
    /** 店铺名称 */
    storeName?: string;
    /** 店铺状态 */
    storeDisable?: string;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
  };

  type StoreVO = {
    /** 会员Id */
    memberId?: string;
    /** tradeId */
    tradeId?: string;
    /** guarantees_price */
    guaranteesPrice?: string;
    /** 会员名称 */
    memberName?: string;
    /** 店铺名称 */
    storeName?: string;
    /** storeJson */
    storeJson?: string;
    /** 店铺关闭时间 */
    storeEndTime?: string;
    /** 店铺状态 */
    storeDisable?: string;
    /** 是否自营 */
    selfOperated?: boolean;
    /** 店铺logo */
    storeLogo?: string;
    /** 经纬度 */
    storeCenter: string;
    /** 店铺简介 */
    storeDesc: string;
    /** 地址名称， '，'分割 */
    storeAddressPath?: string;
    /** 地址id，'，'分割  */
    storeAddressIdPath?: string;
    /** 详细地址 */
    storeAddressDetail?: string;
    /** 描述评分 */
    descriptionScore?: number;
    /** 服务评分 */
    serviceScore?: number;
    /** 物流评分 */
    deliveryScore?: number;
    /** 商品数量 */
    goodsNum?: number;
    /** 收藏数量 */
    collectionNum?: number;
    /** 腾讯云智服唯一标识 */
    yzfSign?: string;
    /** 腾讯云智服小程序唯一标识 */
    yzfMpSign?: string;
    /** udesk IM标识 */
    merchantEuid?: string;
    /** monthSales */
    monthSales?: string;
    /** type */
    type?: 'MIDDLEMAN' | 'MANUFACTURERS';
    /** discountedPrice */
    discountedPrice?: string;
    /** originalPrice */
    originalPrice?: string;
    /** 默认页面是否开启 */
    pageShow?: boolean;
    /** 是否开启自提 */
    selfPickFlag?: boolean;
    /** 库存预警数量 */
    stockWarning?: number;
    /** 登录用户的昵称 */
    nickName?: string;
  };

  type synchronizationDataParams = {
    url: string;
  };

  type Token = {
    accessToken?: string;
    refreshToken?: string;
  };

  type underGoodsParams = {
    goodsId: string;
    reason: string;
  };

  type unpGoodsParams = {
    goodsId: string[];
  };

  type update10Params = {
    id: string;
  };

  type update1Params = {
    userId: string;
    userRole: UserRole[];
  };

  type update2Params = {
    departmentId: string;
  };

  type update3Params = {
    id: string;
  };

  type update5Params = {
    id: string;
  };

  type update7Params = {
    id: string;
  };

  type update8Params = {
    goodsId: string;
  };

  type updateMemberStatusParams = {
    /** 会员ID */
    memberIds: string;
    disabled: boolean;
  };

  type updateOrderPriceParams = {
    orderSn: string;
    price: number;
  };

  type updatePageDataParams = {
    id: string;
  };

  type updateParams = {
    /** 地区ID */
    id: string;
  };

  type upload1Params = {
    file: string;
    base64: string;
  };

  type uploadParams = {
    id: string;
    newName: string;
  };

  type UserRole = {
    /** 用户唯一id */
    userId?: string;
    /** 角色唯一id */
    roleId?: string;
  };

  type verificationImageParams = {
    xPos: number;
    verificationEnums: 'LOGIN' | 'REGISTER' | 'FIND_USER' | 'UPDATE_PASSWORD' | 'WALLET_PASSWORD';
  };

  type Wholesale = {
    /** 商品ID */
    goodsId?: string;
    /** SkuID */
    skuId?: string;
    /** 模版id */
    templateId?: string;
    /** 数量 */
    num?: number;
    /** 金额 */
    price?: number;
  };

  type WholesaleDTO = {
    /** 商品ID */
    goodsId?: string;
    /** SkuID */
    skuId?: string;
    /** 模版id */
    templateId?: string;
    /** 数量 */
    num?: number;
    /** 金额 */
    price?: number;
  };
}
