import axios from 'axios';

axios.defaults.baseURL = "http://200.1.3.234:5566/api";
axios.defaults.timeout = 8000;
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export const fetchTestImgResource = (method, api = 'User/GetVerImg') => {
  return axios[method](api)
}