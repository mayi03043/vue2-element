import { baseRequest } from "../baseRequest";

export function getMenuRequest() {

    return baseRequest({

        // 请求地址
        url: '/api/admin/menus',

        // 请求方法
        method: 'get',

    });
}