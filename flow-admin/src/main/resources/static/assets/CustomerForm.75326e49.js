import{_ as e}from"./BasicForm.312985a0.js";import{u as o}from"./useForm.a3596aad.js";import{ae as r,g as s}from"./index.f8d8fadd.js";import{k as a,ad as t,a1 as i,K as n,o as d,n as p,Q as l,q as m}from"./vendor.bc3b2d68.js";import{_ as u}from"./PageWrapper.30f94524.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.9d70781f.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";const f=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>i(t,{placeholder:"请输入",value:e[o],onChange:r=>{e[o]=r.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var c=a({components:{BasicForm:e,CollapseContainer:r,PageWrapper:u,[t.name]:t},setup(){const{createMessage:e}=s(),[r,{setProps:a}]=o({labelWidth:120,schemas:f,actionColOptions:{span:24}});return{register:r,schemas:f,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))},setProps:a}}});c.render=function(e,o,r,s,a,t){const i=n("a-input"),u=n("BasicForm"),f=n("CollapseContainer"),c=n("PageWrapper");return d(),p(c,{title:"自定义组件示例"},{default:l((()=>[m(f,{title:"自定义表单"},{default:l((()=>[m(u,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:l((({model:e,field:o})=>[m(i,{value:e[o],"onUpdate:value":r=>e[o]=r,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default c;