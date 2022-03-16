import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './vuex/index'
import { Button } from 'ant-design-vue'

const app = createApp(App)

app.use(router)
.use(store)
.use(Button)
.mount('#app')
