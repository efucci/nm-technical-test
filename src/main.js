import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'
import '@/assets/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

