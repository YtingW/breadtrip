import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash.vue'
import Index from './views/Index.vue'
import Recommend from './views/Recommend.vue'
import Discovery from './views/Discovery.vue'
import Detail from './views/Detail.vue'
import Destination from './views/Destination.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/splash'
    },
    {
      path:'/splash',
      name:'splash',
      component:Splash,
      meta: {
        keepAlive: true 
      }

    },
    {
      path: '/index',
      name:'index',
      redirect: '/index/recommend',
      component: Index,
      meta: {
        keepAlive: true 
      },
      children:[
        {
          path:'recommend',
          name:'recommend',
          component:Recommend,
          meta: {
            keepAlive: true 
          }
        },
       
        {
          path:'discovery',
          name:'discovery',
          component:Discovery,
          meta: {
            keepAlive: true 
          }
        },
        
      ]
    },
    {
      path:'detail',
      name:'detail',
      component:Detail,
      meta: {
        keepAlive: true 
      }
    },
    {
          path:'destination',
          name:'destination',
          component:Destination,
          meta: {
            keepAlive: true 
          }
    }
    
  ]
})
