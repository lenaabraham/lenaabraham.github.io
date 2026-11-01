import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import PhotoView from '../views/photo-view.vue'
import AboutContact from '../views/about-contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { transition: 'fade-menu' },
  },
  {
    path: '/styling',
    name: 'styling',
    component: PhotoView,
    meta: { transition: 'fade' },
    props: { photoType: 'styling' }
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: PhotoView,
    meta: { transition: 'fade' },
    props: { photoType: 'recipes' }
  },
  {
    path: '/about',
    name: 'about-contact',
    component: AboutContact,
    meta: { transition: 'fade' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
