import{_ as e}from"./TableImg.7eb6c017.js";import"./BasicForm.86cd97da.js";import"./index.10f2c972.js";import{c as a,d as t,j as o}from"./data.b6179191.js";import{_ as s}from"./PageWrapper.ba7be9e5.js";import{k as i,K as r,o as d,n,Q as m,q as c,Y as p}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.b44b8cab.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";import"./createAsyncComponent.2cc595b8.js";import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */var j=i({components:{BasicTable:e,PageWrapper:s},setup:()=>({defaultHeader:function(){o({data:t,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){o({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:a,data:t})});const f=p(" 导出：默认头部 "),u=p(" 导出：自定义头部 ");j.render=function(e,a,t,o,s,i){const p=r("a-button"),j=r("BasicTable"),b=r("PageWrapper");return d(),n(b,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[f])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default j;