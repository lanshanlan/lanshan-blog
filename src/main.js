import { createApp } from 'vue'
import App from './App.vue'
import less from 'less'
import { router } from './router'
import { store } from './vuex/index'
import { message, Button, Input, Dropdown, Menu, List } from 'ant-design-vue'
import { appUse} from './utils/index'

const antdvArr = [Button, Input, Dropdown, Menu, List]

const app = createApp(App)
app.config.productionTip = false;

appUse(app, antdvArr)
.use(router)
.use(store)
.use(less)
.mount('#app')

app.config.globalProperties.$message = message;
