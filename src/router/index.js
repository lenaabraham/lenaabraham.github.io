import { createRouter, createWebHashHistory } from 'vue-router'
import Savory from '../views/savory.vue'
import Sweet from '../views/sweet.vue'
import Drinks from '../views/drinks.vue'
import Contact from '../views/contact.vue'

const routes = [
  {
    path: '/',
    name: 'savory',
    component: Savory,
  },
  {
    path: '/sweet',
    name: 'sweet',
    component: Sweet,
  },
  {
    path: '/drinks',
    name: 'drinks',
    component: Drinks,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
