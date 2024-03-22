import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/Products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/gallery.vue')
  },
  {
    path: '/Products1',
    name: 'Products1',
    component: () => import('../views/Products1.vue')
  },
{
  path: '/admin',
  name: 'admin',
  component: () => import('../views/admin.vue')
},
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router
