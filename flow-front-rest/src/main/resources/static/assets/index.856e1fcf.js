import{_ as e}from"./TableImg.836c07d9.js";import"./useForm.a6a11689.js";import{u as s}from"./useTable.d91e8351.js";import{_ as o}from"./PageWrapper.02c58e5c.js";import{k as t,aT as a,bm as r,af as n,bi as i,b_ as m,bd as d,K as p,o as c,n as u,P as f,q as j,X as b,s as l}from"./vendor.0482ef83.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{haveDownTableSchema as x,searchFormSchema as h}from"./data.3817502a.js";import g from"./ProcessHeader.dd03088c.js";import w from"./LaunchButton.23019dfb.js";import{b as I,h as P}from"./process.8536102e.js";/* empty css              */import"./index.bfefd9f4.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.3a3072fc.js";import"./useModal.e0e169dd.js";import"./onMountedOrActivated.66cf4856.js";import"./useSortable.d0e38048.js";/* empty css              */import"./CountdownInput.2c4c3183.js";import"./download.84b94ed6.js";import"./StrengthMeter.97839b85.js";import"./usePageContext.2f9e0efb.js";/* empty css              *//* empty css              *//* empty css              */var v=t({components:{BasicTable:e,ProcessHeader:g,LaunchButton:w,PageWrapper:o,[a.name]:a,[r.name]:r,AEmpty:n,[i.name]:i,[i.Item.name]:i.Item,[m.name]:m,[m.Step.name]:m.Step,[d.name]:d,[d.TabPane.name]:d.TabPane},setup(){const[e,{getForm:o}]=s({api:I,title:"",columns:x,formConfig:{labelWidth:120,schemas:h,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return P().then((e=>{const{updateSchema:s}=o();s({field:"appSn",componentProps:{options:e}})})),{registerHaveDownTable:e}}});const S={class:"m-1 desc-wrap process"};v.render=function(e,s,o,t,a,r){const n=p("launch-button"),i=p("process-header"),m=p("router-link"),d=p("BasicTable"),x=p("PageWrapper");return c(),u(x,{title:"流程中心",contentBackground:"",class:"!mt-4"},{extra:f((()=>[j(n)])),footer:f((()=>[j(i,{current:"have-down"})])),default:f((()=>[j("div",S,[j(d,{onRegister:e.registerHaveDownTable},{nameRender:f((({record:e})=>[j(m,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:f((()=>[b(l(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])])),_:1})};export default v;