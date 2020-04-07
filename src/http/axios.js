import axios from "axios";
let AUTH_TOKEN=(function(){
  return "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoenloIiwiZXhwIjoxNTg2NzQ1MTIxLCJpYXQiOjE1ODU4ODExMjF9.e8iQSZp2vPoMyYq-qes-gDy6zoFclbZcbYOIH-RJxtXJek0L1ykz5Khd7xpnf_EmD-ODS9SmsT79kI_uM0_vaw";
})();

var instance = axios.create({
});
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
instance.interceptors.request.use(function(config){
  let url = config.url;
  if(url.indexOf("login")>-1){
    localStorage.setItem('token',"");
    config.headers.Authorization = "";
  }
  if(url.indexOf("user")>-1 && url.indexOf("login")<0){
    config.headers.Authorization =localStorage.getItem("token");
  }
  return config;
},function(err){
  return Promise.reject(err);
});
instance.interceptors.response.use(function(res){
  if(res.headers.token){
    localStorage.setItem('token',res.headers.token);
  }
  return res;
},function(err){
  return err;
});
export default instance;
