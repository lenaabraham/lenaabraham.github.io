import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import SavoryStyling from '../views/styling/savory.vue'
import SweetStyling from '../views/styling/sweet.vue'
import DrinksStyling from '../views/styling/drinks.vue'
import SavoryRecipes from '../views/recipes/savory.vue'
import SweetRecipes from '../views/recipes/sweet.vue'
import DrinksRecipes from '../views/recipes/drinks.vue'
import Contact from '../views/contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { transition: 'fade-menu' },
  },
  {
    path: '/styling/savory',
    name: 'styling-savory',
    component: SavoryStyling,
    meta: { transition: 'fade' },
  },
  {
    path: '/styling/sweet',
    name: 'styling-sweet',
    component: SweetStyling,
    meta: { transition: 'fade' },
  },
  {
    path: '/styling/drinks',
    name: 'styling-drinks',
    component: DrinksStyling,
    meta: { transition: 'fade' },
  },
  {
    path: '/recipes/savory',
    name: 'recipes-savory',
    component: SavoryRecipes,
    meta: { transition: 'fade' },
  },
  {
    path: '/recipes/sweet',
    name: 'recipes-sweet',
    component: SweetRecipes,
    meta: { transition: 'fade' },
  },
  {
    path: '/recipes/drinks',
    name: 'recipes-drinks',
    component: DrinksRecipes,
    meta: { transition: 'fade' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { transition: 'fade' },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { transition: 'fade' },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
