import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import 'bootstrap/dist/css/bootstrap.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faTrash, faPenToSquare)
createApp(App).use(router).mount('#app')

router.push({ name: 'LoginPage' })
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
