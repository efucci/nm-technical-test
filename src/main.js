import { createApp } from 'vue'
import router from './router.js'
import store from './store.js'
import App from './App.vue'
import '@/assets/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
.use(router)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

