import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import store from "@/store";

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/goods/goodsList',
/*    meta: {title: '首页', icon: 'home'},
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '仪表盘', icon: 'dashboard'}
    },
   {
      name: 'document',
      path: 'https://www.macrozheng.com',
      meta: {title: '学习教程', icon: 'document'}
    },
    {
      name: 'video',
      path: 'https://www.macrozheng.com/mall/catalog/mall_video.html',
      meta: {title: '视频教程', icon: 'video'}
    },
    ]*/
  }
]

export const asyncRouterMap = [
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/goodsList',
    name: 'goods',
    meta: {title: '商品', icon: 'product'},
    children: [
        {
          path: 'goodsList',
          name: 'goodsList',
          component: () => import('@/views/pms/product/index'),
          meta: {title: '商品列表', icon: 'product-list'}
        },
        {
          path: 'addProduct',
          name: 'addProduct',
          component: () => import('@/views/pms/product/add'),
          meta: {title: '添加商品', icon: 'product-add'}
        },
        {
          path: 'updateProduct',
          name: 'updateProduct',
          component: () => import('@/views/pms/product/update'),
          meta: {title: '修改商品', icon: 'product-add'},
          hidden: true
        },
        {
          path: 'goodsDetail',
          name: 'goodsDetail',
          component: () => import('@/views/pms/product/goodsDetail'),
          meta: {title: '商品详情'},
          hidden: true
        },
        {
          path: 'productCate',
          name: 'productCate',
          component: () => import('@/views/pms/productCate/index'),
          meta: {title: '商品分类', icon: 'product-cate'}
        },
        {
          path: 'audit',
          name: 'audit',
          component: () => import('@/views/pms/product/audit.vue'),
          meta: {title: '审核商品', icon: 'order-return-reason'}
        },
        {
          path: 'addProductCate',
          name: 'addProductCate',
          component: () => import('@/views/pms/productCate/add'),
          meta: {title: '添加商品分类'},
          hidden: true
        },
        {
          path: 'updateProductCate',
          name: 'updateProductCate',
          component: () => import('@/views/pms/productCate/update'),
          meta: {title: '修改商品分类'},
          hidden: true
        },
      {
        path: 'ask',
        name: 'ask',
        component: () => import('@/views/pms/product/ask'),
        meta: {title: '询价列表', icon: 'product-attr'}
      },
      {
        path: 'answer',
        name: 'answer',
        component: () => import('@/views/pms/product/answer'),
        meta: {title: '报价列表', icon: 'product-attr'},
        hidden: true,
      },
      {
        path: 'brand',
        name: 'brand',
        component: () => import('@/views/pms/brand/index'),
        meta: {title: '品牌管理', icon: 'product-brand'},
      },
      {
        path: 'addBrand',
        name: 'addBrand',
        component: () => import('@/views/pms/brand/add'),
        meta: {title: '添加品牌'},
        hidden: true
      },
      {
        path: 'updateBrand',
        name: 'updateBrand',
        component: () => import('@/views/pms/brand/update'),
        meta: {title: '编辑品牌'},
        hidden: true
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('@/views/pms/comment/index'),
        meta: {title: '评价管理', icon: 'product-list'},
        hidden: true
      },

    ]
  },
  {
    path: '/member',
    component: Layout,
    redirect: '/member/memberList',
    name: 'member',
    meta: {title: '用户', icon: 'user'},
    children: [{
      path: 'memberList',
      name: 'memberList',
      component: () => import('@/views/member/index'),
      meta: {title: '用户列表', icon: 'ums-role'}
    }]
  },
  {
    path: '/seller',
    component: Layout,
    redirect: '/seller/shopList',
    name: 'shop',
    meta: {title: '商家', icon: 'login-mall'},
    children: [{
      path: 'shopList',
      name: 'shopList',
      component: () => import('@/views/seller/shop/shopList'),
      meta: {title: '商家列表', icon: 'login-mall'}
    },{
      path: 'shopAuditList',
      name: 'shopAuditList',
      component: () => import('@/views/seller/shop/shopAuditList'),
      meta: {title: '商家审核', icon: 'order-return-reason'}
    },{
      path: 'depositList',
      name: 'depositList',
      component: () => import('@/views/seller/shop/depositList'),
      meta: {title: '保证金管理', icon: 'order'}
    },{
      path: 'shopDetail',
      name: 'shopDetail',
      component: () => import('@/views/seller/shop/shopDetail'),
      meta: {title: '商家详情'},
      hidden: true
    },{
      path: 'shopOperation',
      name: 'shopOperation',
      component: () => import('@/views/seller/shop/shopOperation'),
      meta: {title: '商家详情'},
      hidden: true
    }]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/order/orderList',
    name: 'order',
    meta: {title: '订单', icon: 'order'},
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/views/oms/order/index'),
        meta: {title: '订单列表', icon: 'order'}
      },
      {
          path: 'orderDetail',
          name: 'orderDetail',
          component: () => import('@/views/oms/order/orderDetail'),
          meta: {title: '订单详情'},
          hidden:true
      },
        /*  {
            path: 'deliverOrderList',
            name: 'deliverOrderList',
            component: () => import('@/views/oms/order/deliverOrderList'),
            meta: {title: '发货列表'},
            hidden:true
        },
          {
              path: 'orderSetting',
              name: 'orderSetting',
              component: () => import('@/views/oms/order/setting'),
              meta: {title: '订单设置', icon: 'order-setting'}
        },
           {
              path: 'returnApply',
              name: 'returnApply',
              component: () => import('@/views/oms/apply/index'),
              meta: {title: '退货申请处理', icon: 'order-return'}
            },
            {
              path: 'returnReason',
              name: 'returnReason',
              component: () => import('@/views/oms/apply/reason'),
              meta: {title: '退货原因设置', icon: 'order-return-reason'}
            },
            {
              path: 'returnApplyDetail',
              name: 'returnApplyDetail',
              component: () => import('@/views/oms/apply/applyDetail'),
              meta: {title: '退货原因详情'},
              hidden:true
            }*/
    ]
  },
/*  {
    path:'/sms',
    component: Layout,
    redirect: '/sms/coupon',
    name: 'sms',
    meta: {title: '营销', icon: 'sms'},
    children: [
      {
        path: 'flash',
        name: 'flash',
        component: () => import('@/views/sms/flash/index'),
        meta: {title: '秒杀活动列表', icon: 'sms-flash'}
      },
      {
        path: 'flashSession',
        name: 'flashSession',
        component: () => import('@/views/sms/flash/sessionList'),
        meta: {title: '秒杀时间段列表'},
        hidden:true
      },
      {
        path: 'selectSession',
        name: 'selectSession',
        component: () => import('@/views/sms/flash/selectSessionList'),
        meta: {title: '秒杀时间段选择'},
        hidden:true
      },
      {
        path: 'flashProductRelation',
        name: 'flashProductRelation',
        component: () => import('@/views/sms/flash/productRelationList'),
        meta: {title: '秒杀商品列表'},
        hidden:true
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/sms/coupon/index'),
        meta: {title: '优惠券列表', icon: 'sms-coupon'}
      },
      {
        path: 'addCoupon',
        name: 'addCoupon',
        component: () => import('@/views/sms/coupon/add'),
        meta: {title: '添加优惠券'},
        hidden:true
      },
      {
        path: 'updateCoupon',
        name: 'updateCoupon',
        component: () => import('@/views/sms/coupon/update'),
        meta: {title: '修改优惠券'},
        hidden:true
      },
      {
        path: 'couponHistory',
        name: 'couponHistory',
        component: () => import('@/views/sms/coupon/history'),
        meta: {title: '优惠券领取详情'},
        hidden:true
      },
      {
        path: 'brand',
        name: 'homeBrand',
        component: () => import('@/views/sms/brand/index'),
        meta: {title: '品牌推荐', icon: 'product-brand'}
      },
      {
        path: 'new',
        name: 'homeNew',
        component: () => import('@/views/sms/new/index'),
        meta: {title: '新品推荐', icon: 'sms-new'}
      },
      {
        path: 'hot',
        name: 'homeHot',
        component: () => import('@/views/sms/hot/index'),
        meta: {title: '人气推荐', icon: 'sms-hot'}
      },
      {
        path: 'subject',
        name: 'homeSubject',
        component: () => import('@/views/sms/subject/index'),
        meta: {title: '专题推荐', icon: 'sms-subject'}
      },
      {
        path: 'advertise',
        name: 'homeAdvertise',
        component: () => import('@/views/sms/advertise/index'),
        meta: {title: '广告列表', icon: 'sms-ad'}
      },
      {
        path: 'addAdvertise',
        name: 'addHomeAdvertise',
        component: () => import('@/views/sms/advertise/add'),
        meta: {title: '添加广告'},
        hidden:true
      },
      {
        path: 'updateAdvertise',
        name: 'updateHomeAdvertise',
        component: () => import('@/views/sms/advertise/update'),
        meta: {title: '编辑广告'},
        hidden:true
      }
    ]
  },*/
  {
    path:'/ums',
    component: Layout,
    redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限', icon: 'ums'},
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/ums/admin/userManage'),
        meta: {title: '管理员列表', icon: 'ums-admin'}
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/ums/role/roleManage'),
        meta: {title: '角色权限', icon: 'ums-role'}
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/ums/menu/menu'),
        meta: {title: '菜单管理', icon: 'ums-menu'}
      }
    ]
  },
  /*{
    path:'/setting',
    component: Layout,
    redirect: '/setting/system',
    name: 'setting',
    meta: {title: '设置', icon: 'ums'},
    children: [
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/setting/settingManage'),
        meta: {title: '系统设置', icon: 'ums-admin'}
      },
      {
        path: 'sms',
        name: 'sms',
        component: () => import('@/views/setting/smsSettingManage'),
        meta: {title: '短信配置', icon: 'ums-role'}
      },
      {
        path: 'platform',
        name: 'platform',
        component: () => import('@/views/setting/platformSetting'),
        meta: {title: '网站设置', icon: 'ums-menu'}
      }
    ]
  },*/
  // {path: '*', redirect: '/404', hidden: true}
]
export const routeList = constantRouterMap.concat(asyncRouterMap)

// store.commit('SET_ROUTERS', asyncRouterMap);
store.commit('ROUTER', routeList);
// store.state.routers = routeList
console.log('routeList',routeList)
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: routeList
})
