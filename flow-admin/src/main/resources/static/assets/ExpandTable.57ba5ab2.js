import{_ as e}from"./TableImg.7eb6c017.js";import"./BasicForm.86cd97da.js";import{u as s}from"./useTable.5323312b.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.2b83964f.js";import{k as i,K as t,o as a,n as d,q as n,Q as m,s as p}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.b44b8cab.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";var b=i({components:{BasicTable:e},setup(){const[e]=s({title:"可展开表格",api:r,titleHelpMessage:"不能与scroll共用",columns:o(),rowKey:"id",canResize:!1});return{registerTable:e}}});const c={class:"p-4"};b.render=function(e,s,o,r,i,b){const j=t("BasicTable");return a(),d("div",c,[n(j,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[n("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default b;