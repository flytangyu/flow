import{_ as e}from"./TableImg.8ccd808f.js";import"./BasicForm.312985a0.js";import{getBasicColumns as o,getBasicData as a}from"./tableData.83d6955e.js";import{k as i,r as t,K as n,o as r,n as s,q as d,Q as p,Y as l,s as c}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";import"./index.f8d8fadd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.9d70781f.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";var m=i({components:{BasicTable:e},setup(){const e=t(!1),i=t(!1),n=t(!0),r=t(!0),s=t(!1);return{columns:o(),data:a(),canResize:e,loading:i,striped:n,border:r,toggleStriped:function(){n.value=!n.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){i.value=!0,setTimeout((()=>{i.value=!1,s.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:s}}});const u={class:"p-4"},g=l(" 开启loading ");m.render=function(e,o,a,i,t,m){const f=n("a-button"),j=n("BasicTable");return r(),s("div",u,[d(j,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:p((()=>[d(f,{type:"primary",onClick:e.toggleCanResize},{default:p((()=>[l(c(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),d(f,{type:"primary",onClick:e.toggleBorder},{default:p((()=>[l(c(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),d(f,{type:"primary",onClick:e.toggleLoading},{default:p((()=>[g])),_:1},8,["onClick"]),d(f,{type:"primary",onClick:e.toggleStriped},{default:p((()=>[l(c(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default m;