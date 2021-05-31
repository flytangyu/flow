import{_ as e,b as a}from"./useModal.47c80e94.js";import{k as t,r as s,u as o,a as r,J as n,f as i,K as l,o as c,n as m,P as d,q as u,N as p}from"./vendor.d660e98f.js";import{V as f}from"./Viewer.fd8523c8.js";import{l as v}from"./process.c572ca0f.js";import"./index.ee676e78.js";import"./useWindowSizeFn.4f1b8c18.js";var g=t({name:"FlowDiagramModal",components:{BasicModal:e},emits:["success","register"],setup(e,{emit:t}){const l=s(!0),{currentRoute:c}=o(),{params:{modelKey:m}}=r(c),d=s(),u=s(),p=s(),[g,{setModalProps:M,closeModal:h}]=a((e=>{return a=this,t=null,s=function*(){M({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate),m&&n((()=>{v({modelKey:m}).then((e=>{p.value=new f({container:d.value}),p.value.importXML(e.modelXml,(function(e){}))}))}))},new Promise(((e,o)=>{var r=e=>{try{i(s.next(e))}catch(a){o(a)}},n=e=>{try{i(s.throw(e))}catch(a){o(a)}},i=a=>a.done?e(a.value):Promise.resolve(a.value).then(r,n);i((s=s.apply(a,t)).next())}));var a,t,s})),j=i((()=>r(l)?"修改":"新增"));return{container:u,bpmnCanvas:d,registerModal:g,getTitle:j}}});const M={class:"containers",ref:"container"};g.render=function(e,a,t,s,o,r){const n=l("BasicModal");return c(),m(n,p(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:d((()=>[u("div",M,null,512)])),_:1},16,["onRegister","title","onOk"])};export default g;