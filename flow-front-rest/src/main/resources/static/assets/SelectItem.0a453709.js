import{k as e,bv as t,f as s,K as a,o as n,n as i,q as o,s as d,N as r,x as l}from"./vendor.d660e98f.js";import{c as p}from"./index.e2ea082d.js";import{b as f}from"./index.bd5aaa04.js";import"./index.c80ff000.js";import"./createAsyncComponent.adef6e7d.js";import"./index.25d320c9.js";import"./useWindowSizeFn.4f1b8c18.js";import"./usePageContext.8ac4efa6.js";/* empty css              */import"./useSortable.ab79833a.js";import"./lock.b0ef9ebb.js";/* empty css              */var c=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const m=l()(((e,t,s,l,p,f)=>{const c=a("Select");return n(),i("div",{class:e.prefixCls},[o("span",null,d(e.title),1),o(c,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));c.render=m,c.__scopeId="data-v-2dba4940";export default c;