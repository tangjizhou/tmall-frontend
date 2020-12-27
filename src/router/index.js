import Vue from 'vue'
import Router from 'vue-router'
import UserList from "../module/user/UserList";
import Login from "../module/login/Login";
import qs from 'qs';
import $http from "../framework/axios";

Vue.use(Router);


function init() {
  console.log("init")
  return Promise.resolve({"token": "this is token"})
}

let start = () => {
  console.log("start")
  return $http.get("/user/list")
}

let redirect = (data) => {
  return $http.get(data)
}

let setToken = (content) => {
  console.log('网页内容' + content)
  return Promise.resolve(content)
}


const routes = [
  {path: '/useList', name: 'UserList', component: UserList},
  {path: '/login', name: 'Login', component: Login}
];

const router = new Router({
  mode: "history",
  routes: routes,
  stringifyQuery: qs.stringify
});

router.beforeEach((from, to, next) => {
  console.log(from, to)
  init().then(token => {
    localStorage.setItem("token", token || '')
    return start()
  }).then(response => {
    return Promise.resolve(response.data.result.records)
  }).then(records => {
    return setToken(records)
  }).then(result => {
    console.log(result)
  })
  next()
})
export default router;
