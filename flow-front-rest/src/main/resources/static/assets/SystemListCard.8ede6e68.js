import{k as s,bm as t,bo as e,aQ as l,aP as a,bp as o,bq as i,K as d,o as r,n,P as c,q as u,S as f,ag as p,s as m,N as x,X as g}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{m as v}from"./index.dd44fc8e.js";import{g as y}from"./data.108c606b.js";var w=s({components:{Card:t,CardGrid:t.Grid,Icon:v,Carousel:e,Row:l,Col:a,LeftOutlined:o,RightOutlined:i},setup:()=>({items:y})});const _=g("更多"),b={class:"custom-slick-arrow",style:{left:"-15px",zindex:"9"}},j={class:"custom-slick-arrow",style:{right:"-15px"}},k={class:"!w-full"},C={style:{"font-size":"16px"}},h={class:"flex h-20 text-secondary"},z={class:"!w-full"},O={class:"text-lg"},R={class:"flex h-10 text-secondary"};w.render=function(s,t,e,l,a,o){const i=d("a-button"),g=d("LeftOutlined"),v=d("RightOutlined"),y=d("Icon"),w=d("router-link"),q=d("Col"),A=d("Row"),G=d("Carousel"),I=d("Card");return r(),n(I,x({class:"system-item",title:"常用系统"},s.$attrs),{extra:c((()=>[u(i,{type:"link",size:"small"},{default:c((()=>[_])),_:1})])),default:c((()=>[u(G,{arrows:"",dots:!1},{prevArrow:c((()=>[u("div",b,[u(g)])])),nextArrow:c((()=>[u("div",j,[u(v)])])),default:c((()=>[u("div",k,[u(A,{gutter:16,style:{padding:"0 20px"}},{default:c((()=>[(r(!0),n(f,null,p(s.items,(s=>(r(),n(q,{span:4,key:s,class:"align-center"},{default:c((()=>[u(w,{to:""},{default:c((()=>[u(y,{icon:s.icon,color:s.color,size:"48"},null,8,["icon","color"]),u("div",null,[u("span",C,m(s.title),1)]),u("div",h,m(s.desc),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})]),u("div",z,[u(A,{gutter:16,style:{padding:"0 20px"}},{default:c((()=>[(r(!0),n(f,null,p(s.items,(s=>(r(),n(q,{span:4,key:s,class:"align-center"},{default:c((()=>[u(w,{to:"",title:s.desc},{default:c((()=>[u(y,{icon:s.icon,color:s.color,size:"48"},null,8,["icon","color"]),u("div",null,[u("span",O,m(s.title),1)]),u("div",R,m(s.desc),1)])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1})])])),_:1})])),_:1},16)};export default w;