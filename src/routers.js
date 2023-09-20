import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddPage from './components/Add.vue'
import UpdatePage from './components/Update.vue'

const routes = [
  {
    name: 'HomePage',
    component: HomePage,
    path: '/'
  },
  {
    name: 'SignUp',
    component: SignUp,
    path: '/sign-up'
  },
  {
    name: 'LoginPage',
    component: LoginPage,
    path: '/login'
  },
  {
    name: 'AddPage',
    component: AddPage,
    path: '/add'
  },
  {
    name: 'UpdatePage',
    component: UpdatePage,
    path: '/update/:id'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
