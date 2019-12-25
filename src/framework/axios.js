import axios from 'axios';
import {Loading, Message} from "element-ui";

const OK = 2000;
const NOT_LOGIN = 4003;
const BAD_REQUEST = 4000;
const SERVER_INTERNAL_ERROR = 5000;
export const code = {
  OK, NOT_LOGIN, BAD_REQUEST, SERVER_INTERNAL_ERROR
};


const http = axios.create({
  baseURL: "/tmall-service",
  timeout: 15000
});

http.interceptors.request.use(config => {
  config.loading = Loading.service({
    text: "努力加载中...",
    background: 'rgba(0, 0, 0, 0.7)',
    target: 'el-table__body-wrapper'
  });
  return config;
}, error => {
  return Promise.reject(error);
});


http.interceptors.response.use(response => {
  let data = response.data;
  let config = response.config;
  let loading = config.loading;
  loading.close();
  switch (data.code) {
    case OK:
      return response;
    case NOT_LOGIN:
      window.location = window.location;
      break;
    default:
      Message.error(response.data.message);
      return Promise.reject(error);
  }
  return response;
}, error => {
  return Promise.reject(error);
});

export default http;
window.$http = http;
