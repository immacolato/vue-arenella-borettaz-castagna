import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
createApp(App)
    .use(router)
    .mount('#app')
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
