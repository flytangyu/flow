import{_ as e}from"./TableImg.44575666.js";import"./BasicForm.52dd7a78.js";import{u as s}from"./useTable.9cfd2432.js";import{getCustomHeaderColumns as o}from"./tableData.83d6955e.js";import{d as t}from"./table.cbb2e425.js";import{am as i}from"./index.f72cd585.js";import{k as r,bK as a,K as m,o as d,n,q as p,Q as c,Y as j}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.141421b5.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.a73129f6.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";var l=r({components:{BasicTable:e,FormOutlined:a,BasicHelp:i},setup(){const[e]=s({title:"定高/头部自定义",api:t,columns:o(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const b={class:"p-4"},f=j(" 姓名 "),u=j(" 地址 ");l.render=function(e,s,o,t,i,r){const a=m("BasicHelp"),j=m("FormOutlined"),l=m("BasicTable");return d(),n("div",b,[p(l,{onRegister:e.registerTable},{customTitle:c((()=>[p("span",null,[f,p(a,{class:"ml-2",text:"姓名"})])])),customAddress:c((()=>[u,p(j,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default l;