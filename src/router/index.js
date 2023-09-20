import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/Home.vue'
import AddPage from '../components/Add.vue'
import UpdatePage from '../components/Update.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/add', name: 'Add', component: AddPage },
  { path: '/update', name: 'Update', component: UpdatePage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'activeLink' // Imposta la classe per l'evidenziazione del link attivo
})

export default router
