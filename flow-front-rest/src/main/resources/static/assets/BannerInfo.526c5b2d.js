import{k as t,bm as e,bo as s,bp as a,bq as i,K as r,o as l,n as d,P as o,q as n,S as u,ag as c,s as f,N as m}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{m as h}from"./index.21f8a12f.js";var p=t({props:{dataSource:Array,height:{type:Number,default:200}},components:{Card:e,CardGrid:e.Grid,Icon:h,Carousel:s,LeftOutlined:a,RightOutlined:i},setup:t=>({items:t.dataSource,height:t.height})});const g={class:"custom-slick-arrow",style:{left:"0","z-index":"8"}},b={class:"custom-slick-arrow",style:{right:"0"}},x={class:"banner-text"};p.render=function(t,e,s,a,i,h){const p=r("LeftOutlined"),y=r("RightOutlined"),v=r("Carousel"),w=r("Card");return l(),d(w,m({class:"banner-box",title:"",style:`height:${t.height}px;`,"body-style":"padding:0;"},t.$attrs),{default:o((()=>[n(v,{arrows:"",dots:!1,class:"!h-full !w-full"},{prevArrow:o((()=>[n("div",g,[n(p)])])),nextArrow:o((()=>[n("div",b,[n(y)])])),default:o((()=>[(l(!0),d(u,null,c(t.items,(e=>(l(),d("div",{class:"!w-full carousel-item",key:e.id,title:e.title},[n("div",{class:"banner",style:`height: ${t.height}px; background-image: url('${e.imgSrc}')`},[n("div",x,f(e.title),1)],4)],8,["title"])))),128))])),_:1})])),_:1},16,["style"])};export default p;