import Vue from 'vue'
import VueRouter from 'vue-router'
const LoginView = () =>
    import ('@/views/auth/LoginView.vue');

const AdminView = () =>
    import ('@/views/admin/AdminView.vue');

Vue.use(VueRouter)

const routes = [

    { path: '/', redirect: '/auth/login', },
    { path: '/auth/login', component: LoginView, },
    { path: '/admin', component: AdminView, },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router