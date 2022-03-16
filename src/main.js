import { createApp } from 'vue'
import App from './App.vue'
import less from 'less'
import { router } from './router'
import { store } from './vuex/index'
import { Button, message } from 'ant-design-vue'

const app = createApp(App)
app.config.productionTip = false;

app.use(router)
.use(store)
.use(less)
.use(Button)
.mount('#app')

app.config.globalProperties.$message = message;
