import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import Detail from '../views/Detail.vue'
import Carts from '../views/Carts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {path:'/index',component:Index},
      {path:'/Product/:id',component:Product,props:true},
      {path:'/Detail/:id',component:Detail,props:true}
    ]
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/carts',
    component:Carts,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
