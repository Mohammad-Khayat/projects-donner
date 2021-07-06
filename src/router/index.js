import Vue from 'vue'
import VueRouter from 'vue-router'
import AddOffer from '../components/offers/AddOffer.vue'
import SignForm from '../components/auth/SignForm.vue'
import Home from '../views/Home.vue'
import NewProject from '../views/NewProject.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/project',
    component: NewProject
  },
  {
    path:'/offer/:projectId',
    component:AddOffer,
    props:true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sign',
    name: 'About',
    component:SignForm,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
