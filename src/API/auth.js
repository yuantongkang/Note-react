import fetch from '@/helpers/fetch'

const URL = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    GET_INFO: '/auth'
}


export default {
    //注册， 返回 promise 对象
    register({username, password}){
        return fetch(URL.REGISTER, 'POST', {username, password})
    },

    //登录，返回 promise 对象
    login({username, password}) {
        return fetch(URL.LOGIN, 'POST', {username, password})
    },

    //注销登录
    logout() {
        return fetch(URL.LOGOUT)
    },

    //获取当前登录用户的信息， 返回 promise 对象
    getUser(){
        return fetch(URL.GET_INFO)
    }


}