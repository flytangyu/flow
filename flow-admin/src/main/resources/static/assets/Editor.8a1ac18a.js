import{_ as e}from"./BasicForm.312985a0.js";import{ae as a,g as t}from"./index.f8d8fadd.js";import{M as o}from"./index.50034253.js";import{_ as r}from"./PageWrapper.30f94524.js";import{k as s,a1 as i,K as n,o as d,n as m,Q as p,q as l}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.9d70781f.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./createAsyncComponent.dc75f7c3.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:a})=>i(o,{value:e[a],onChange:t=>{e[a]=t}})}];var u=s({components:{BasicForm:e,CollapseContainer:a,PageWrapper:r},setup(){const{createMessage:e}=t();return{schemas:c,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))}}}});u.render=function(e,a,t,o,r,s){const i=n("BasicForm"),c=n("CollapseContainer"),u=n("PageWrapper");return d(),m(u,{title:"MarkDown组件嵌入Form示例"},{default:p((()=>[l(c,{title:"MarkDown表单"},{default:p((()=>[l(i,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;