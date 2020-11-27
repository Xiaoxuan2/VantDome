import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Loing',
      name: 'Loing',
      component: () => import('./views/Loing.vue')
    },
    {
      path: '/Three',
      name: 'Three',
      component: () => import('./views/Three.vue')
    }
    , {
      path: '/Comdtiy',
      name: 'Comdtiy',
      component: () => import('./views/Comdtiy.vue'),
      children: [
        {
          path: '/One',
          name: 'One',
          component: () => import('./views/One.vue'),
        },

        {
          path: '/Two',
          name: 'Two',
          component: () => import('./views/Two.vue')

        },

        {
          path: "/Comdtiy", //默认显示组件     
          redirect: "/One"
          //重定向，页面默认显示One组件登录页面 
        }
      ]
    },
    {
      path: "/", //默认显示组件     
      redirect: "/Loing"
      //重定向，页面默认显示Loing组件登录页面 
    }
  ]
})
