import { createApp } from 'vue';
// import Vue, { createApp } from 'vue';
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
import 'element-plus/lib/theme-chalk/index.css'

import ElementPlus from 'element-plus'

// Vue.use(ElementUI);
// Vue.use(ElementPlus);

createApp(App).use(router).use(ElementPlus).mount('#app')
