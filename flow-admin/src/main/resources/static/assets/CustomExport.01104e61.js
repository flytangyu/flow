import{_ as e}from"./TableImg.8ccd808f.js";import"./BasicForm.312985a0.js";import{E as o}from"./index.3c31f49b.js";import{c as t,d as a,j as s}from"./data.5dcce885.js";import{b as r}from"./useModal.9d70781f.js";import{_ as i}from"./PageWrapper.30f94524.js";import{k as d,K as n,o as p,n as c,Q as m,q as f,Y as j}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";import"./index.f8d8fadd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./createAsyncComponent.dc75f7c3.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */var l=d({components:{BasicTable:e,ExpExcelModel:o,PageWrapper:i},setup(){const[e,{openModal:o}]=r();return{defaultHeader:function({filename:e,bookType:o}){s({data:a,filename:e,write2excelOpts:{bookType:o}})},columns:t,data:a,register:e,openModal:o}}});const u=j(" 导出 ");l.render=function(e,o,t,a,s,r){const i=n("a-button"),d=n("BasicTable"),j=n("ExpExcelModel"),l=n("PageWrapper");return p(),c(l,{title:"导出示例",content:"可以选择导出格式"},{default:m((()=>[f(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[f(i,{onClick:e.openModal},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;