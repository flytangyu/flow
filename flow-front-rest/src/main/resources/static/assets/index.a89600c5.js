import o from"./LockPage.254259f0.js";import{u as e}from"./lock.3e70f4f6.js";import{k as t,f as r,K as s,o as a,n,P as c,W as f,T as m}from"./vendor.d660e98f.js";import"./index.51c58f14.js";import"./header.d801b988.js";var d=t({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:r((()=>{var e,t;return null!=(t=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&t}))}}});d.render=function(o,e,t,r,d,u){const i=s("LockPage");return a(),n(m,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(a(),n(i,{key:0})):f("",!0)])),_:1})};export default d;