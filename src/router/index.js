/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Created by Johnny                                               *
 * User:Johnny                                                     *
 * Date:2020/12/9                                                  *
 * Time:9:12 上午                                                   *
 * QQ:271802190                                                    *
 * Email:johnny_csy@163.com                                        *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
import login from "@/components/login/login.vue";
import home from "@/components/home/home"
import navList from "@/components/navLeft/navList";
import navTop from "@/components/navTop/navTop";
import newPage from "@/components/newPage/newPage";
/* 地址列表 */
const routers = [
    {path: '/navLeft', name: 'navLeft', meta: {title: '系统左测导航'}, component: navList},
    {path: '/navTop', name: 'navTop', meta: {title: '系统顶部导航'}, component: navTop},
    {path: '/', name: 'login', meta: {title: 'Login - 系统管理登陆'}, component: login},
    {path: '/home', name: 'home', meta: {title: 'Login'}, component: home},
    {path: '/newPage', name: 'newPage', meta: {title: '新建页面'}, component: newPage},
]

export default new VueRouter({
    mode: 'history',
    routes: routers
})
