import { createApp } from 'vue'
import App from './App.vue'
// import DktPlus from '@dkt-plus/dkt-plus'
import DktPlus from '../lib/dkt-plus.es.js'
import '../lib/style.css'

const app = createApp(App)
app.use(DktPlus)
app.mount('#app')
