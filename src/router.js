import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}//解决版本问题const originalPush = Router.prototype.push
 
const router = new VueRouter({
  
 routes: [
  //  {
  //     // path: '/Loing',
  //     // name: 'Loing',
  //     // component: () => import('./views/Loing.vue')
  //   }
   // ,
    {
      path: '/Loing1',
      name: 'Loing1',
      component: () => import('./views/Loing1.vue')
    }
    ,
    {
      path: '/Four',
      name: 'Four',
      component: () => import('./views/Four.vue'),
    },{
      path: '/Five',
      name: 'Five',
      component: () => import('./views/Five.vue'),
    }
    ,{
      path: '/Six',
      name: 'Six',
      component: () => import('./views/Six.vue'),
    },{
      path: '/Seven',
      name: 'Seven',
      component: () => import('./views/Seven.vue'),
    },{
      path: '/Eight',
      name: 'Eight',
      component: () => import('./views/Eight.vue'),
    },
    {
      path: '/Comdtiy', //
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
            path: '/Three',
            name: 'Three',
            component: () => import('./views/Three.vue')
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
      redirect: "/Loing1"
      //重定向，页面默认显示Loing组件登录页面 
    }
  ]
})
export default router;

router.beforeEach((to, from, next) => {// 当前路由
  let isLogin= JSON.parse(localStorage.getItem("user"));
  if(isLogin){
    next() // 放行的意思  
  }else{
    if(to.path==='/Loing1'){ // 要去的路由
         next()
          //登录成功后 放行 
    }else{
      next('/Loing1')//没有登录的情况下一直都在登录页面
    }
  }
  
  
})