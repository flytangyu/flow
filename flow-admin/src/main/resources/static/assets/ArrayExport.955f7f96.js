import{_ as e}from"./TableImg.44575666.js";import"./BasicForm.52dd7a78.js";import"./index.db726c21.js";import{c as o,d as a,a as t,b as s,e as i}from"./data.b614073c.js";import{_ as r}from"./PageWrapper.c247b944.js";import{k as d,K as n,o as m,n as p,Q as c,q as j,Y as b}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.141421b5.js";import"./index.f72cd585.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.a73129f6.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";import"./createAsyncComponent.d1e6eb80.js";import"./usePageContext.8ab99773.js";/* empty css              *//* empty css              */var f=d({components:{BasicTable:e,PageWrapper:r},setup:()=>({aoaToExcel:function(){t({data:s,header:i,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:a})});const u=b(" 导出 ");f.render=function(e,o,a,t,s,i){const r=n("a-button"),d=n("BasicTable"),b=n("PageWrapper");return m(),p(b,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(r,{onClick:e.aoaToExcel},{default:c((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;