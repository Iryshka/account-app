import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './plugins/router'

const app = createApp(App)

// import DefaultHeader from '@/components/layouts/DefaultHeader.vue'
// app.component('DefaultHeader', DefaultHeader)

// import MainContent from '@/components/layouts/TheHero.vue'
// app.component('MainContent', MainContent)

app.use(createPinia())
app.use(router)

app.mount('#app')
