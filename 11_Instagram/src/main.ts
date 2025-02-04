import './presentation/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './presentation/router'

//firebase
import { VueFire, VueFireAuth } from 'vuefire'
import { FirebaseApp } from './config/firebaseConfig'

const app = createApp(App)

app.use(createPinia())
app.use(router)

//firebase
app.use(VueFire, {
  firebaseApp: FirebaseApp,
  modules: [VueFireAuth()],
})

app.mount('#app')
