import store from "@/store";
import axios from "axios";

export function baseRequest(config) {

    const instance = axios.create({
        baseURL: 'http://laravel.io',
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
    });


    // 添加请求拦截器
    instance.interceptors.request.use(config => {

        // 为请求添加token
        config.headers.Authorization = 'bearer ' + store.getters.getToken;

        return config;
    }, error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    });


    // 添加响应拦截器
    instance.interceptors.response.use(response => {

        // 2xx 范围内的状态码都会触发该函数。
        // 响应一个token
        return response.data.access_token;
    }, error => {

        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        // if (error.response.data.status_code) {
        //     console.log(error);
        //     // 错误处理
        //     switch (error.response.data.status_code) {
        //         case 401:
        //             return Promise.reject('登入失败，账号或密码错误');

        //     }
        // }

        return Promise.reject(error);
    });

    return instance(config);

}