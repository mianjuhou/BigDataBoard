import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Teacher from "@/components/Teacher";
import Main from "@/components/Main";
import MainIndex from "@/components/MainIndex";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/teacher',
      // path: '/',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/',
      // path: '/main',
      name: 'Main',
      component: Main
    },
    {
      // path: '/',
      path: '/mainIndex',
      name: 'MainIndex',
      component: MainIndex
    }
  ]
})
