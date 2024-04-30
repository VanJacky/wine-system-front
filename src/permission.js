import router from './router/index'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  // next()
  // return
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      // const username = "admin"
      console.log('store.getters.roles.length',store.getters.roles)
      console.log('router', router)
      // router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
      // console.log('router', router)
      if (store.getters.roles) {
        // @ts-ignore
        let menus = []
        // @ts-ignore

/*        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          let menus= res.data.result || [];
          store.dispatch('GenerateRoutes', { menus, username: 'admin' }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
            // next({ ...to, replace: true })
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })*/
        next()
      } else {
 /*       store.dispatch('GetInfo').then(res => { // 拉取用户信息
          let menus=res.data.result.menus || [];
          let username=res.data.result.username;
          store.dispatch('GenerateRoutes', { menus,username }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
            // next({ ...to, replace: true })
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })*/
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
