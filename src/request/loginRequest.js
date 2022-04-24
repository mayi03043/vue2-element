import { baseRequest } from "./baseRequest";

export function getTokenRequest(data) {

    return baseRequest({

        // 请求地址
        url: '/api/auth/login',

        // 请求方法
        method: 'post',

        // 请求参数
        data: {
            email: data.email,
            password: data.password,
        }

    });
}