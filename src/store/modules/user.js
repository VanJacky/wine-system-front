// import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import {login} from "@/apis/manager/guanliyuan.ts";
import {postManagerPassportUserLogin} from "@/apis/controller/GuanLiYuan/postManagerPassportUserLogin";
import {getManagerPassportUserInfo} from "@/apis/controller/GuanLiYuan/getManagerPassportUserInfo";
import {getManagerPermissionMenuMemberMenu} from "@/apis/controller";

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        postManagerPassportUserLogin({username, password: userInfo.password}).then(response => {
          const result = response.data.result
          const tokenStr = result.accessToken
          setToken(tokenStr)
          commit('SET_TOKEN', tokenStr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getManagerPermissionMenuMemberMenu().then(response => {
          const data = response.data.result
          // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          if (true) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', 'admin')
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', 'admin')
          commit('SET_AVATAR', 'admin')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
