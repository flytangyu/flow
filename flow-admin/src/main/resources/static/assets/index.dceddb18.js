import{ae as e}from"./index.5e2cac4f.js";import{k as t,r as l,bc as r,K as o,o as n,n as s,Q as a,q as c,Y as i,s as u}from"./vendor.9d9efc92.js";import{_ as d}from"./PageWrapper.5f4c8315.js";import"./usePageContext.1ca8bf0b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var m=t({components:{CollapseContainer:e,PageWrapper:d},setup(){const e=l(null),{enter:t,toggle:o,exit:n,isFullscreen:s}=r(),{toggle:a}=r(e);return{enter:t,toggleDom:a,toggle:o,isFullscreen:s,exit:n,domRef:e}}});const f=i(" Enter Window Full Screen "),p=i(" Toggle Window Full Screen "),g=i(" Exit Window Full Screen "),C=i(" Enter Dom Full Screen "),x={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},k=i(" Exit Dom Full Screen ");m.render=function(e,t,l,r,d,m){const b=o("a-button"),w=o("CollapseContainer"),F=o("PageWrapper");return n(),s(F,{title:"全屏示例"},{default:a((()=>[c(w,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:a((()=>[c(b,{type:"primary",onClick:e.enter,class:"mr-2"},{default:a((()=>[f])),_:1},8,["onClick"]),c(b,{color:"success",onClick:e.toggle,class:"mr-2"},{default:a((()=>[p])),_:1},8,["onClick"]),c(b,{color:"error",onClick:e.exit,class:"mr-2"},{default:a((()=>[g])),_:1},8,["onClick"]),i(" Current State: "+u(e.isFullscreen),1)])),_:1}),c(w,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:a((()=>[c(b,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:a((()=>[C])),_:1},8,["onClick"])])),_:1}),c("div",x,[c(b,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:a((()=>[k])),_:1},8,["onClick"])],512)])),_:1})};export default m;