import axios from 'axios';
// import Qs from 'qs';
import { Message, Loading } from 'element-ui'; // 消息提示框组件 这个你们可以不用


// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://101.230.217.205:8082';
   } else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'http://partner.gamebet.online';
   } else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://partner.gamebet.online';
   };

// 设置请求超时时间
axios.defaults.timeout = 10000;

// 设置post请求头
// Host: partner.gamebet.online
// Origin: http://localhost:8080
// axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Content-Type, accept';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.Authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoenloIiwiZXhwIjoxNTg2NzQ1MTIxLCJpYXQiOjE1ODU4ODExMjF9.e8iQSZp2vPoMyYq-qes-gDy6zoFclbZcbYOIH-RJxtXJek0L1ykz5Khd7xpnf_EmD-ODS9SmsT79kI_uM0_vaw';

// 请求拦截
axios.interceptors.request.use( config => {
  if (window.sessionStorage.getItem("token")) { //判断token是否存在
      config.headers.Authorization = window.sessionStorage.getItem("token");  //将token设置成请求头
  }
    // 在发送请求之前做些什么 验证token之类的
   // Loading.service(true);
     return config;
    }, err => {
      console.log(111)
      // 对响应错误做点什么
     return Promise.error(error);
    })

// 响应拦截
axios.interceptors.response.use( response => {
    // 对响应数据做点什么
    return response;
  }, error => {
    // 对响应错误做点什么
    if(error.response.status === 401) {
      location.href = '/login'
    }else if (error.response.status === 500) {
      return Promise.reject(error.response.data)
   }
    return Promise.reject(error.response.data);
  });


// 封装get方法和post方法

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
    axios.get(url, {
     params: params
    }).then(res => {
     resolve(res.data);
     Loading.service(true).close();
    //  Message({message: '请求成功', type: 'success'});
    }).catch(err => {
     reject(err.data)
     //Loading.service(true).close();
     Message({message: '加载失败', type: 'error'});
    })
   });}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
// var that= this;
// export function post(url, params, type) {
//     return new Promise((resolve, reject) => {
//      axios.post(url, Qs.stringify(params),{
//        headers: {
//          'Content-type': type?type:'application/x-www-form-urlencoded;charset=UTF-8',
//        }
//      })
//     .then(res => {
//      resolve(res.data);
//     //  Loading.service(true).close();
//     //  Message({message: '请求成功', type: 'success'});
//     })
//     .catch(err => {
//      reject(err.data)
//     // Loading.service(true).close();
//      Message({message: '加载失败', type: 'error'});
//     })
//     });
// }
