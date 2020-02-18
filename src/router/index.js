import Vue from 'vue'
import VueRouter from 'vue-router'
import Students from '../views/students'
import Heros from '../views/students'
import Wuqi from '../views/students'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/students'
   },
  {
   path:'/students',
   name:'students',
   component:Students
  },
  {
    path:'/heros',
    name:'heros',
    component:Heros
   },
   {
    path:'/wuqi',
    name:'wuqi',
    component:Wuqi
   }
]

const router = new VueRouter({
  routes
})

export default router
