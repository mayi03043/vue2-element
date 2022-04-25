import store from '@/store';
import Vue from 'vue'
import VueRouter from 'vue-router'
const AuthView = () =>
    import ('@/views/auth/AuthView.vue');
const LoginView = () =>
    import ('@/views/auth/login/LoginView.vue');

const AdminView = () =>
    import ('@/views/admin/AdminView.vue');

const HomeView = () =>
    import ('@/views/admin/home/HomeView.vue');

const MenusView = () =>
    import ('@/views/admin/home/MenusView.vue');

const RolesView = () =>
    import ('@/views/admin/home/RolesView.vue');

const UsersView = () =>
    import ('@/views/admin/home/UsersView.vue');

Vue.use(VueRouter)



// 重复导航报错解决方案
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}


const routes = [

    { path: '/', redirect: '/auth', },
    {
        path: '/auth',
        component: AuthView,
        children: [
            { path: '/', name: 'login', redirect: 'login' },
            { path: 'login', name: 'auth.login', component: LoginView },
        ]
    },

    {
        path: '/admin',
        component: AdminView,
        children: [
            { path: '/', redirect: 'home' },
            { path: 'home', name: 'admin.home', component: HomeView },
            { path: 'users', name: 'admin.users', component: UsersView },
            { path: 'roles', name: 'admin.roles', component: RolesView },
            { path: 'menus', name: 'admin.menus', component: MenusView },
        ]
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {

    if (to.name == 'auth.login') {

        return next()
    }

    if (!store.getters.getToken) {

        return next('/auth')
    }

    next()



})

export default router