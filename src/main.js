import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
/* end Font Awesome */

const app = createApp(App)

app.use(router)

app.mount('#app')
