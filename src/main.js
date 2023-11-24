import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import uiComponents from './ui-components'

const app = createApp(App)

// Componentlarni globallashtrish
uiComponents.map(component => app.component(component.name, component));


app
.use(router)
.mount('#app')
