import{_ as e}from"./Description.vue_vue&type=script&lang.78be6c7f.js";import{_ as t}from"./TableImg.a2bdf37d.js";import"./BasicForm.a5827375.js";import{u as r}from"./useTable.87c711db.js";import{_ as a}from"./PageWrapper.cdcc7f53.js";import{k as o,aV as s,K as i,o as n,n as d,x as m,q as p}from"./vendor.d159a66e.js";/* empty css              */import{refundSchema as c,refundData as u,personSchema as l,personData as f,refundTableData as j,refundTableSchema as b,refundTimeTableSchema as x,refundTimeTableData as g}from"./data.81434c84.js";/* empty css              */import"./index.bafd7c31.js";/* empty css              *//* empty css              */import"./useForm.823d07cd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.aa1e233c.js";import"./useModal.5da775c6.js";import"./onMountedOrActivated.40a48c91.js";import"./useSortable.eabf1042.js";import"./useExpose.0ecfeadd.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.94d45b12.js";/* empty css              *//* empty css              */import"./download.9743db94.js";import"./StrengthMeter.44711fa4.js";import"./usePageContext.58f59678.js";/* empty css              *//* empty css              *//* empty css              */var h=o({components:{Description:e,BasicTable:t,PageWrapper:a,[s.name]:s},setup(){const[e]=r({title:"退货商品",dataSource:j,columns:b,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,r=0;return e.forEach((e=>{t+=e.t5,r+=e.t6})),[{t1:"总计",t5:t,t6:r}]}}),[t]=r({title:"退货进度",columns:x,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:c,refundData:u,personSchema:l,personData:f}}});const S=m(),T=S(((e,t,r,a,o,s)=>{const m=i("Description"),c=i("a-divider"),u=i("BasicTable"),l=i("PageWrapper");return n(),d(l,{title:"基础详情页",contentBackground:""},{default:S((()=>[p(m,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),p(c),p(m,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),p(c),p(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),p(c),p(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-109959ad";export default h;