import { createApp } from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import './style.css'
import App from './App.vue'

const app = createApp(App);

new WaveUI(app);

app.mount('#app')
