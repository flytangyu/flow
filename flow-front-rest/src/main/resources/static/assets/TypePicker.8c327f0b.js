import{k as e,R as t,l as s,m as a,K as i,o as l,n,S as r,ag as p,q as o,x as c}from"./vendor.59fe1062.js";import{c as d}from"./index.21cfc268.js";var f=e({name:"MenuTypePicker",components:{Tooltip:t},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=d("setting-menu-type-picker");return{prefixCls:e}}});const m=c();s("data-v-7e211634");const u=o("div",{class:"mix-sidebar"},null,-1);a();const y=m(((e,t,s,a,c,d)=>{const f=i("Tooltip");return l(),n("div",{class:e.prefixCls},[(l(!0),n(r,null,p(e.menuTypeList||[],(t=>(l(),n(f,{key:t.title,title:t.title,placement:"bottom"},{default:m((()=>[o("div",{onClick:s=>e.handler(t),class:[`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}]},[u],10,["onClick"])])),_:2},1032,["title"])))),128))],2)}));f.render=y,f.__scopeId="data-v-7e211634";export default f;
