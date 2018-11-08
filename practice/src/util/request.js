import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/util/auth'

// 创建axios实例
const service = axios.create({
  baseURL = process.env.BASE_API, // 判断运行环境从而改变接口地址
  timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(config => {
  // 如果token存在，每次发请求带上token
  if (store.getters.token) {
    config.headers['X-Token'] = getToken();
  }
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(config => {
  response => response;
}, error => {
  console.log(error);
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
  });

export default servrice;