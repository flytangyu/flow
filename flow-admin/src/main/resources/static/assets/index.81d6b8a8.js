import o from"./LockPage.827ceb6f.js";import{u as e}from"./lock.f2a87fd7.js";import{k as a,f as t,K as r,o as s,n,Q as c,X as f,T as d}from"./vendor.d159a66e.js";import"./index.efe55fc0.js";import"./header.d801b988.js";var m=a({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:t((()=>{var e,a;return null!=(a=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&a}))}}});m.render=function(o,e,a,t,m,u){const i=r("LockPage");return s(),n(d,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(s(),n(i,{key:0})):f("",!0)])),_:1})};export default m;