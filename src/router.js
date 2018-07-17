import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash.vue'
import Index from './views/Index.vue'
import Recommend from './views/Recommend.vue'
import Discovery from './views/Discovery.vue'
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
      component:Splash
    },
    {
      path: '/index',
      name:'index',
      redirect: '/index/recommend',
      component: Index,
      children:[
        {
          path:'recommend',
          name:'recommend',
          component:Recommend
        },
        {
          path:'discovery',
          name:'discovery',
          component:Discovery
        }
      ]
    }
  ]
})
