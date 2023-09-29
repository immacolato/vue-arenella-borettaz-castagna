import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/Home.vue'
import AddPage from '../views/Add.vue'
import UpdatePage from '../views/Update.vue'
import LoginPage from '../views/Login.vue'

const routes = [
  { path: '/' },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/add', name: 'Add', component: AddPage },
  { path: '/update', name: 'Update', component: UpdatePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'activeLink'
})

export default router
