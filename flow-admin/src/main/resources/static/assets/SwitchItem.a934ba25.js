import{k as e,bD as t,f as n,K as s,o as d,n as a,q as i,s as o,N as r,x as c}from"./vendor.bc3b2d68.js";/* empty css              */import{c as l,d as p}from"./index.f8d8fadd.js";import{b as f}from"./index.bab99e25.js";import"./useDrawer.6025cc72.js";/* empty css              *//* empty css              */import"./createAsyncComponent.dc75f7c3.js";import"./useFrameKeepAlive.ba06b3f5.js";var h=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=l("setting-switch-item"),{t:s}=p();return{prefixCls:t,t:s,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const m=c()(((e,t,n,c,l,p)=>{const f=s("Switch");return d(),a("div",{class:e.prefixCls},[i("span",null,o(e.title),1),i(f,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));h.render=m,h.__scopeId="data-v-fd7354e2";export default h;