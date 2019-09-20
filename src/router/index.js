import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserList from "../components/user/UserList";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/hello', name: 'HelloWorld', component: HelloWorld},
    {path: '/useList', name: 'UserList', component: UserList}
  ]
})
