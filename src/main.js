// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import store from './store';

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(store).mount('#app')    
