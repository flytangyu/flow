import{c as e}from"./index.bfefd9f4.js";import{b as t}from"./index.c526b713.js";import{k as s,bA as i,K as r,o as n,n as o,S as a,ag as c,q as f}from"./vendor.0482ef83.js";import"./index.255fa42c.js";import"./createAsyncComponent.05f240f7.js";import"./index.c7febf40.js";import"./useWindowSizeFn.3a3072fc.js";import"./usePageContext.2f9e0efb.js";/* empty css              */import"./useSortable.d0e38048.js";import"./lock.c6040ead.js";/* empty css              */var p=s({name:"ThemeColorPicker",components:{CheckOutlined:i},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:i}=e("setting-theme-picker");return{prefixCls:i,handleClick:function(e){s.event&&t(s.event,e)}}}});p.render=function(e,t,s,i,p,l){const d=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,c(e.colorList||[],(t=>(n(),o("span",{key:t,onClick:s=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[f(d)],14,["onClick"])))),128))],2)};export default p;