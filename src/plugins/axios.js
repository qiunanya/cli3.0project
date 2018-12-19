"use strict";

import Vue from "vue";
import axios from "axios";
import { mapActions } from "vuex";
import store from "../store";
import router from "../router";

const { notice } = mapActions("tool", ["notice"]);
const { loginOut } = mapActions("user", ["loginOut"]);
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // 将 token 传到服务器
    config.headers.token = store.state.user.token;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    // 处理统一的异常，比如无权限，登录过期，和一些提示
    if (response.status == 200 && response.data.status == 403) {
      loginOut();
      router.push("/login");
    }
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.status == 500) {
      notice({ message: "服务器异常，未请求到数据~~", type: "error" });
    }
    if (error.status == 404) {
      notice({ message: "网络存在问题，未请求到数据~~", type: "error" });
    }
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
