import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

//配置基础路径
//axios.defaults.baseURL='/api'
axios.defaults.timeout=8000

Vue.config.productionTip = false
Vue.prototype.axios=axios
Vue.use(VueCookie)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  let path=location.hash
  if(res.status==0){
    return res.data
  }else if(res.status==10){
    if(path!=='#/index'){
      window.location.href='/#/login'
    }
    return Promise.reject(res)
  }else{
    alert(res.msg)
    return Promise.reject(res)
  }
})
// axios.interceptors.response.use(function(response){
//   let res = response.data;
//   let path = location.hash;
//   if(res.status == 0){
//     return res.data;
//   }else if(res.status == 10){
//     if (path != '#/index'){
//       window.location.href = '/#/login';
//     }
//     return Promise.reject(res);
//   }else{
//     Message.warning(res.msg);
//     return Promise.reject(res);
//   }
// },(error)=>{
//   let res = error.response;
//   Message.error(res.data.message);
//   return Promise.reject(error);
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
