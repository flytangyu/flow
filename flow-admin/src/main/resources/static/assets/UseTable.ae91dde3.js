import{_ as e}from"./TableImg.8ccd808f.js";import"./BasicForm.312985a0.js";import{u as t}from"./useTable.84f74a57.js";import{getBasicColumns as o,getBasicShortColumns as a}from"./tableData.83d6955e.js";import{g as i}from"./index.f8d8fadd.js";import{d as n}from"./table.ffb5ceaa.js";import{k as s,K as l,o as c,n as r,q as d,Q as m,Y as f}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.9d70781f.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";var u=s({components:{BasicTable:e},setup(){const{createMessage:e}=i(),[s,{setLoading:l,setColumns:c,getColumns:r,getDataSource:d,reload:m,getPaginationRef:f,setPagination:u,getSelectRows:g,getSelectRowKeys:p,setSelectedRowKeys:b,clearSelectedRowKeys:C}]=t({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:n,columns:o(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:s,changeLoading:function(){l(!0),setTimeout((()=>{l(!1)}),1e3)},changeColumns:function(){c(a())},reloadTable:function(){c(o()),m({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),m()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){C()}}}});const g={class:"p-4"},p={class:"mb-4"},b=f(" 还原 "),C=f(" 开启loading "),j=f(" 更改Columns "),k=f(" 获取Columns "),S=f(" 获取表格数据 "),w=f(" 跳转到第2页 "),x={class:"mb-4"},R=f(" 获取选中行 "),T=f(" 获取选中行Key "),_=f(" 设置选中行 "),y=f(" 清空选中行 "),K=f(" 获取分页信息 ");u.render=function(e,t,o,a,i,n){const s=l("a-button"),f=l("BasicTable");return c(),r("div",g,[d("div",p,[d(s,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[b])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[j])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[S])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[w])),_:1},8,["onClick"])]),d("div",x,[d(s,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[R])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[T])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[y])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[K])),_:1},8,["onClick"])]),d(f,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;