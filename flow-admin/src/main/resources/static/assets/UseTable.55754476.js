import{_ as e}from"./TableImg.7eb6c017.js";import"./BasicForm.86cd97da.js";import{u as t}from"./useTable.5323312b.js";import{getBasicColumns as o,getBasicShortColumns as i}from"./tableData.83d6955e.js";import{g as n}from"./index.33a0330f.js";import{d as a}from"./table.2b83964f.js";import{k as s,K as l,o as c,n as r,q as d,Q as m,Y as u}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.b44b8cab.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";var f=s({components:{BasicTable:e},setup(){const{createMessage:e}=n(),[s,{setLoading:l,setColumns:c,getColumns:r,getDataSource:d,reload:m,getPaginationRef:u,setPagination:f,getSelectRows:g,getSelectRowKeys:b,setSelectedRowKeys:p,clearSelectedRowKeys:C}]=t({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:a,columns:o(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:s,changeLoading:function(){l(!0),setTimeout((()=>{l(!1)}),1e3)},changeColumns:function(){c(i())},reloadTable:function(){c(o()),m({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),m()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){p(["0","1","2"])},clearSelect:function(){C()}}}});const g={class:"p-4"},b={class:"mb-4"},p=u(" 还原 "),C=u(" 开启loading "),j=u(" 更改Columns "),k=u(" 获取Columns "),S=u(" 获取表格数据 "),w=u(" 跳转到第2页 "),x={class:"mb-4"},R=u(" 获取选中行 "),T=u(" 获取选中行Key "),_=u(" 设置选中行 "),y=u(" 清空选中行 "),K=u(" 获取分页信息 ");f.render=function(e,t,o,i,n,a){const s=l("a-button"),u=l("BasicTable");return c(),r("div",g,[d("div",b,[d(s,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[p])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[j])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[S])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[w])),_:1},8,["onClick"])]),d("div",x,[d(s,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[R])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[T])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[y])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[K])),_:1},8,["onClick"])]),d(u,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;