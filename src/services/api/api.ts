import axios from "axios";

// 创建一个 axios 实例
const api = axios.create();

// 使用请求拦截器在每个请求中都设置 token
api.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token"); // 假设你的 token 存储在 localStorage 中

    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    // 输出请求信息
    // console.log("Request:", config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
