import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
/* import { createStore } from 'vuex' */
import store from './store'

// Aggiungi le icone alla libreria
library.add(faUserSecret, faTrash, faPenToSquare, faEnvelope)

const app = createApp(App)

app.use(store)
// Usa il router nell'app
app.use(router)

// Registra il componente FontAwesomeIcon in modo globale
app.component('font-awesome-icon', FontAwesomeIcon)

// Monta l'app nell'elemento con ID 'app'
app.mount('#app')

// Imposta la rotta iniziale (LoginPage) dopo aver montato l'app
router.push({ name: 'LoginPage' })
