import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import SavoryStyling from '../views/styling/savory.vue'
import SweetStyling from '../views/styling/sweet.vue'
import DrinksStyling from '../views/styling/drinks.vue'
import SavoryRecipes from '../views/recipes/savory.vue'
import Contact from '../views/contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/styling/savory',
    name: 'styling-savory',
    component: SavoryStyling,
  },
  {
    path: '/styling/sweet',
    name: 'styling-sweet',
    component: SweetStyling,
  },
  {
    path: '/styling/drinks',
    name: 'styling-drinks',
    component: DrinksStyling,
  },
  {
    path: '/recipes/savory',
    name: 'recipes-savory',
    component: SavoryRecipes,
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
