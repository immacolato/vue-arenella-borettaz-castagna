import HomePage from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import LoginPage from './views/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddPage from './views/Add.vue'
import UpdatePage from './views/Update.vue'
import ScopriDiPiu from './views/ScopriDiPiu.vue'

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
  },
  {
    name: 'ScopriDiPiu',
    component: ScopriDiPiu,
    path: '/scopridipiu'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
