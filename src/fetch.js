import axios from 'axios'
import baseConfig from '@/helpers/config-baseURL.js'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = baseConfig.baseURL
axios.defaults.withCredentials = true

/*
axios 的用法： https://www.npmjs.com/package/axios

这里和后端约定，如果数据返回状态是对的，状态码为200；如果数据出现问题，状态码是400

使用方法:

fetch('/login', 'post', {usernmae: 'hugner', password: '123456'})
  .then(data => {
    console.log(data)
  }).catch(data => {
    console.error(data.msg)
  })

*/

export default function fetch(url, type='get', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: type,
            validateStatus (status) {
                return (status >= 200 && status < 300)|| status === 400
            }
        }
        if(type.toLowerCase() === 'get'){
            option.params = data
        }else {
            option.data = data
        }
        axios(option).then((res)=>{
            if(res.status === 200){
                resolve(res.data)
            }else{
                console.error(res.data.msg||'参数错误')
                reject(res.data)
            }
        }).catch(function(err){
            console.error('网络异常')
            reject({msg: '网络异常'})
        })
    })
}

