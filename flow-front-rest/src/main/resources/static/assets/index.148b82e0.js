import{_ as e}from"./TableImg.6aad73d2.js";import"./useForm.168d35a0.js";import{u as a}from"./useTable.68bf052d.js";import{_ as s}from"./PageWrapper.bf8b0064.js";import{k as t,aT as n,bm as o,af as r,bi as i,b_ as d,bd as m,bg as c,ad as p,K as u,o as l,n as f,P as b,q as j,X as g,s as x,S as h,ag as v,a$ as P,W as I}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{launchedTableSchema as T,searchFormSchema as S}from"./data.cd8f3a34.js";import w from"./ProcessHeader.d4005cec.js";import _ from"./LaunchButton.b18ed4ed.js";import{i as y,h as A}from"./process.8a42e76d.js";/* empty css              */import"./index.e2ea082d.js";/* empty css              *//* empty css              */import"./useWindowSizeFn.4f1b8c18.js";import"./useModal.a510cdd9.js";import"./onMountedOrActivated.a3bdff8d.js";import"./useSortable.ab79833a.js";/* empty css              */import"./CountdownInput.d5a0767d.js";import"./download.1a585a2f.js";import"./StrengthMeter.6622ea04.js";import"./usePageContext.8ac4efa6.js";/* empty css              *//* empty css              *//* empty css              */var B=t({components:{BasicTable:e,ProcessHeader:w,LaunchButton:_,PageWrapper:s,[n.name]:n,[o.name]:o,AEmpty:r,[i.name]:i,[i.Item.name]:i.Item,[d.name]:d,[d.Step.name]:d.Step,[m.name]:m,[m.TabPane.name]:m.TabPane,Tag:c,Popover:p},setup(){const[e,{getForm:s}]=a({api:y,title:"",columns:T,formConfig:{labelWidth:120,schemas:S,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return A().then((e=>{const{updateSchema:a}=s();a({field:"appSn",componentProps:{options:e}})})),{registerLaunchedTable:e}}});const k={class:"m-1 desc-wrap process"};B.render=function(e,a,s,t,n,o){const r=u("launch-button"),i=u("process-header"),d=u("router-link"),m=u("Tag"),c=u("Popover"),p=u("BasicTable"),T=u("PageWrapper");return l(),f(T,{title:"流程中心",contentBackground:"",class:"!mt-4"},{extra:b((()=>[j(r)])),footer:b((()=>[j(i,{current:"launched"})])),default:b((()=>[j("div",k,[j(p,{onRegister:e.registerLaunchedTable},{nameRender:b((({record:e})=>[j(d,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId||""}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:b((()=>[g(x(e.formName),1)])),_:2},1032,["to"])])),currentAssigneesRender:b((({record:e})=>[e.currentAssignees&&e.currentAssignees.length>0?(l(!0),f(h,{key:0},v(e.currentAssignees,(e=>(l(),f(c,{title:"user"===e.type?"人员信息":"角色信息"},P({default:b((()=>[j(m,{color:"warning"},{default:b((()=>[g(x(e.name),1)])),_:2},1024)])),_:2},["user"===e.type?{name:"content",fn:b((()=>[j("div",null,"姓名："+x(e.name),1),j("div",null,"工号："+x(e.code),1),j("div",null,"手机："+x(e.mobile),1)]))}:{name:"content",fn:b((()=>[j("div",null,"名称："+x(e.name),1),j("div",null,"标识："+x(e.code),1)]))}]),1032,["title"])))),256)):I("",!0)])),_:1},8,["onRegister"])])])),_:1})};export default B;