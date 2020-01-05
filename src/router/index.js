import Vue from 'vue'
import Router from 'vue-router'
import UserList from "../module/user/UserList";
import Login from "../module/login/Login";
import qs from 'qs';

Vue.use(Router);


const routes = [
  {path: '/useList', name: 'UserList', component: UserList},
  {path: '/login', name: 'Login', component: Login}
];

const router = new Router({
  mode: "history",
  routes: routes,
  stringifyQuery: qs.stringify
});
export default router;
