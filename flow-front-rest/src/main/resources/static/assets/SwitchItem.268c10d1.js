import{k as e,bw as t,f as n,K as s,o as i,n as a,q as d,s as o,N as r,x as c}from"./vendor.0482ef83.js";/* empty css              */import{c as l,d as p}from"./index.ac2432bc.js";import{b as f}from"./index.d74c04fb.js";import"./index.128178c1.js";import"./createAsyncComponent.025c09bd.js";import"./index.82680ac2.js";import"./useWindowSizeFn.3a3072fc.js";import"./usePageContext.f06b7ee4.js";/* empty css              */import"./useSortable.6ab30817.js";import"./lock.44861f55.js";/* empty css              */var m=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=l("setting-switch-item"),{t:s}=p();return{prefixCls:t,t:s,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const h=c()(((e,t,n,c,l,p)=>{const f=s("Switch");return i(),a("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(f,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));m.render=h,m.__scopeId="data-v-fd7354e2";export default m;