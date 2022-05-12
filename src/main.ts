import '../src/assets/base.css'
import './permission';
import components from './components'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import { store } from './store';
const app = createApp(App)

app.use(components)
app.use(router)
app.use(store)
app.use(ElementPlus, {locale: zhCn})
app.mount('#app')
