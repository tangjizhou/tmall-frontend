import axios from 'axios';
import {Loading, Message, MessageBox} from "element-ui";
import router from "../router";

const OK = 2000;
const NOT_LOGIN = 4003;
const BAD_REQUEST = 4000;
const SERVER_INTERNAL_ERROR = 5000;
export const code = {
  OK, NOT_LOGIN, BAD_REQUEST, SERVER_INTERNAL_ERROR
};


const $http = axios.create({
  baseURL: "/tmall-service",
  timeout: 15000
});

$http.interceptors.request.use(config => {
  config.loading = Loading.service({
    text: "努力加载中...",
    background: 'rgba(0, 0, 0, 0.7)',
  });
  return config;
}, error => {
  destroyLoadingInstance(error.config);
  return Promise.reject(error);
});


$http.interceptors.response.use(response => {
  let data = response.data;
  destroyLoadingInstance(response.config);
  let message = response.data.message;
  switch (data.code) {
    case OK:
      return response;
    case NOT_LOGIN:
      Message.warning({
        message: message,
        type: "warning",
        duration: 3 * 1000
      });
      let requestUri = location.hash;
      router.push({path: "/login", params: {redirect: requestUri}});
      return Promise.reject(message);
    default:
      Message.error(message);
      return Promise.reject(message);
  }
  return response;
}, error => {
  destroyLoadingInstance(error.config);
  return Promise.reject(error);
});

function destroyLoadingInstance(config) {
  if (config === null || config.loading === null) {
    return;
  }
  config.loading.close();
}

export default $http;
