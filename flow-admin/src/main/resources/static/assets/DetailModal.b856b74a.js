import{_ as t}from"./useModal.a73129f6.js";import{_ as e}from"./Description.vue_vue&type=script&lang.2c240081.js";import{u as s}from"./useDescription.7f3fdcd4.js";import{d as o}from"./index.f72cd585.js";import{getDescSchema as r}from"./data.7591c39a.js";import{k as i,K as a,o as n,n as d,Q as c,q as p,N as f}from"./vendor.bc3b2d68.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */var m=i({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:e},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[e]=s({column:2,schema:r()});return{register:e,useI18n:o,t:t}}});m.render=function(t,e,s,o,r,i){const m=a("Description"),l=a("BasicModal");return n(),d(l,f({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:c((()=>[p(m,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default m;