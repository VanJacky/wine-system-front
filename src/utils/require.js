/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
// import { extend } from 'umi-request'
import {clearToken, getStore, getToken, setStore} from "@/utils/auth";
// import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import {Message} from "element-ui";

const whitelist = [
    '/v1/buyer/goods/category/getBrandsList',
    '/public-url-2',
    '/buyer/other/purchase/purchase',
    // Add more public URLs here...
];

// @ts-ignore

const errorHandler = (error) => {
    const {response} = error;
    if (response && response.status) {
        if (error.data.code === 20033) return response;
        const errorText = error.data.message;
        // const errorText = codeMessage[response.status] || response.statusText
        const {status, url} = response;
        // ElMessage.error(errorText)
        throw error;
    }
    // return response
};

/**
 * 配置request请求时的默认参数
 */
const require = axios.create({
    // errorHandler, // 默认错误处理
    // prefix: config.mockApi,
    baseURL: "http://119.91.37.36:10001/",
    timeout: 600000,
});
// request拦截器, 改变url 或 options
require.interceptors.request.use(
    (config) => {
      let uuid = getStore("uuid");
      if (!uuid) {
          uuid = "uuid";
          setStore("uuid", uuid);
      }
      const isPublicURL = whitelist.some(url => config.url.includes(url));
      config.headers = {
          ...config.headers,
          accessToken: getToken(),
          uuid: `${uuid}`
      }
      if (!getToken()){
        delete config.headers.accessToken
      }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
require.interceptors.response.use(
    function (response) {
        if (response && response.status === 200) {
            return response;
        }
        // 对响应数据做点什么
        return response;
    },
    function (error) {
        console.log("error: ", error.response);
        if (error.response.status === 403|| error.response.data.code === 20004) {
            clearToken();
            return;
        }
        // 对响应错误做点什
        Message.error(error.response.data.message || error.response || '服务器繁忙，请稍后再试')
        return Promise.reject(error);
    }
);

export default require;
