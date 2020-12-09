import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
/* 全局 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import GLAPP from './assets/js/app.js'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.glApp = GLAPP

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


