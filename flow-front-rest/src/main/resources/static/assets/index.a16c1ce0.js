import{k as e,bm as a,r as o,K as n,o as r,n as s,P as t,q as d}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as i}from"./PageWrapper.bf8b0064.js";import m from"./WorkbenchHeader.b7f4aa98.js";import c from"./SystemListCard.93602a2f.js";import f from"./QuickNav.b6384f80.js";import l from"./DynamicInfo.bc314165.js";import p from"./NoticeInfo.eddd31e9.js";import j from"./BannerInfo.22a6ec60.js";import u from"./SaleRadar.c1b9f28f.js";import{d as b,n as I,b as g}from"./data.108c606b.js";import"./index.e2ea082d.js";import"./usePageContext.8ac4efa6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";import"./header.d801b988.js";/* empty css              *//* empty css              */import"./process.8a42e76d.js";/* empty css              */import"./useECharts.dbccb78e.js";var y=e({components:{PageWrapper:i,WorkbenchHeader:m,SystemListCard:c,NoticeInfo:p,BannerInfo:j,QuickNav:f,DynamicInfo:l,SaleRadar:u,Card:a},setup(){const e=o(!0);return setTimeout((()=>{e.value=!1}),1500),{loading:e,dynamicInfoItems:b,noticeInfoItems:I,bannerInfoItems:g}}});const x={class:"lg:flex"},S={class:"lg:w-7/10 w-full enter-y"},v={class:"lg:w-3/10 !pl-4"};y.render=function(e,a,o,i,m,c){const f=n("WorkbenchHeader"),l=n("NoticeInfo"),p=n("SystemListCard"),j=n("BannerInfo"),u=n("DynamicInfo"),b=n("PageWrapper");return r(),s(b,{class:"!mt-4"},{headerContent:t((()=>[d(f)])),default:t((()=>[d("div",x,[d("div",S,[d(l,{dataSource:e.noticeInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"]),d(p,{loading:e.loading,class:"enter-y"},null,8,["loading"])]),d("div",v,[d(j,{dataSource:e.bannerInfoItems,class:"!my-4 enter-y",loading:e.loading},null,8,["dataSource","loading"]),d(u,{dataSource:e.dynamicInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])])])),_:1})};export default y;