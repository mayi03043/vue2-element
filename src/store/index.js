import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
    },
    getters: {

        // 获取token，同步本地存储
        getToken(state) {
            if (state.token) {
                return state.token;
            }
            state.token = localStorage.getItem('token');
            return state.token;
        }

    },
    mutations: {
        setToken(state, token) {

            // 保存token与本地存储
            state.token = token;
            localStorage.setItem('token', token);

        },

        delToken(state) {

            // 清除token与本地存储
            state.token = '';
            localStorage.removeItem('myCat');
        }

    },
    actions: {

    },
    modules: {

    }
})