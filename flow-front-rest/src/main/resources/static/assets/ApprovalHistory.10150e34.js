import{k as e,aI as t,bT as a,bV as s,bs as i,bW as o,bn as r,u as n,r as d,a as l,I as m,K as p,o as c,n as u,P as f,q as j,X as b,s as v}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{ac as I}from"./index.ee676e78.js";import x from"./FlowDiagramModal.bd99c4da.js";import y from"./index.8d9aebe0.js";import{d as L}from"./process.c572ca0f.js";import"./useModal.47c80e94.js";import"./useWindowSizeFn.4f1b8c18.js";import"./Viewer.fd8523c8.js";import"./PageWrapper.df7b7946.js";import"./usePageContext.741f964f.js";/* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              */import"./index.dddfca0b.js";var g=e({name:"ApprovalHistory",components:{Button:t,ApartmentOutlined:a,FlowDiagramModal:x,BpmnPreviewModal:y,Timeline:s,TimelineItem:s.Item,List:i,ListItem:i.Item,ListItemMeta:i.Item.Meta,ClockCircleOutlined:o,CollapseContainer:I,Avatar:r},setup(e,{emit:t}){const{currentRoute:a}=n(),s=d([]),i=d(!1),{params:{modelKey:o},query:{taskId:r,procInstId:p}}=l(a);return m((()=>{i.value=!0,L({procInstId:p}).then((e=>{s.value=e})).finally((()=>{i.value=!1}))})),{historyList:s,approvalHistoryLoading:i}}});const M=j("div",{class:"font-bold"},"审批记录",-1),C=j("br",null,null,-1),w={class:"font-bold"};g.render=function(e,t,a,s,i,o){const r=p("Avatar"),n=p("ListItemMeta"),d=p("ListItem"),l=p("List"),m=p("CollapseContainer");return c(),u(m,{canExpan:!0},{title:f((()=>[M])),default:f((()=>[j("div",null,[j(l,{loading:e.approvalHistoryLoading,"item-layout":"horizontal",dataSource:e.historyList},{renderItem:f((({item:e})=>[j(d,null,{default:f((()=>[j(n,null,{description:f((()=>[b(v(e.message||"无"),1),C])),title:f((()=>[j("span",w,v(e.activityName),1),b(" "+v(e.time),1)])),avatar:f((()=>[j(r,null,{default:f((()=>[b(v(e.typeName),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["loading","dataSource"])])])),_:1})};export default g;