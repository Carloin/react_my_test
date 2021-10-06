/*
 * @Author: hft
 * @Date: 2021-10-06 08:48:17
 * @LastEditors: hft
 * @LastEditTime: 2021-10-06 15:19:22
 * @Description: file content
 */
import axios from "axios";
import { message, Modal } from "antd";
import NProgress from "nprogress";
import { clear, get } from "./storage";
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 5000,
});
service.interceptors.request.use(
  (config: any) =>{
    NProgress.start();
    
    config.headers["Authorization"] = get("token");
    console.log("456");
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.status === 200) {
      const { code } = response.data;
      if (code === 4003) {
        message.warning("你的登录状态已经丢失，请退出后重新登录！");
        return Promise.reject("请登录");
      } else if (code === 4000) {
        clear();
        return Promise.reject("认证失败");
      }
      return response;
    } else {
      Modal.error({
        title: "网络请求错误",
      });
      console.log("123");
      
      return Promise.reject("网络请求错误");
    }
  },
  (error) => {
    Modal.error({
      title: "网络请求错误",
    });
    NProgress.done();
    return Promise.reject(error);
  }
);
export default service;
