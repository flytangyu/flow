import{_ as e}from"./TableImg.6e3cdbac.js";import"./useForm.f653b7da.js";import{u as s}from"./useTable.fa194a4c.js";import{_ as o}from"./PageWrapper.44137319.js";import{k as a,aT as t,bm as r,af as n,bi as i,b_ as d,bd as m,K as p,o as c,n as f,P as u,q as j,X as b,s as l}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{todoTableSchema as x,searchFormSchema as g}from"./data.851607e4.js";import h from"./ProcessHeader.454ef4d5.js";import I from"./LaunchButton.18c2d23d.js";import{a as T,h as P}from"./process.ca438802.js";/* empty css              */import"./index.fe7e6ae2.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.4f1b8c18.js";import"./useModal.cf585834.js";import"./onMountedOrActivated.a3bdff8d.js";import"./useSortable.f32532ef.js";/* empty css              */import"./CountdownInput.3cddc062.js";import"./download.a51d0688.js";import"./StrengthMeter.a0087382.js";import"./usePageContext.a4ed025e.js";/* empty css              *//* empty css              *//* empty css              */var S=a({components:{BasicTable:e,ProcessHeader:h,LaunchButton:I,PageWrapper:o,[t.name]:t,[r.name]:r,AEmpty:n,[i.name]:i,[i.Item.name]:i.Item,[d.name]:d,[d.Step.name]:d.Step,[m.name]:m,[m.TabPane.name]:m.TabPane},setup(){const[e,{getForm:o}]=s({api:T,title:"",columns:x,formConfig:{labelWidth:120,schemas:g,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return P().then((e=>{const{updateSchema:s}=o();s({field:"appSn",componentProps:{options:e}})})),{registerTodoTable:e}}});const w={class:"m-1 desc-wrap process"};S.render=function(e,s,o,a,t,r){const n=p("launch-button"),i=p("process-header"),d=p("router-link"),m=p("BasicTable"),x=p("PageWrapper");return c(),f(x,{title:"流程中心",contentBackground:"",class:"!mt-4"},{extra:u((()=>[j(n)])),footer:u((()=>[j(i,{current:"todo"})])),default:u((()=>[j("div",w,[j(m,{onRegister:e.registerTodoTable},{nameRender:u((({record:e})=>[j(d,{to:`/process/approve/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:u((()=>[b(l(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])])),_:1})};export default S;
