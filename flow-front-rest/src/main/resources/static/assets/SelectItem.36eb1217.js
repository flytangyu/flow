import{k as e,bv as t,f as s,K as n,o as a,n as i,q as o,s as r,N as l,x as d}from"./vendor.0482ef83.js";import{c as p}from"./index.bfefd9f4.js";import{b as f}from"./index.c526b713.js";import"./index.255fa42c.js";import"./createAsyncComponent.05f240f7.js";import"./index.c7febf40.js";import"./useWindowSizeFn.3a3072fc.js";import"./usePageContext.2f9e0efb.js";/* empty css              */import"./useSortable.d0e38048.js";import"./lock.c6040ead.js";/* empty css              */var c=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const m=d()(((e,t,s,d,p,f)=>{const c=n("Select");return a(),i("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));c.render=m,c.__scopeId="data-v-2dba4940";export default c;