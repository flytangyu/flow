import{k as s,bm as a,K as t,o as e,n,P as o,q as l,S as r,ag as d,s as i,N as c,X as m}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{m as f}from"./index.491886fb.js";import{groupItems as p}from"./data.cc04bca7.js";/* empty css              */var u=s({components:{Card:a,CardGrid:a.Grid,Icon:f},setup:()=>({items:p})});const x=m("更多"),j={class:"flex"},b={class:"text-lg ml-4"},y={class:"flex mt-2 h-10 text-secondary"},v={class:"flex justify-between text-secondary"};u.render=function(s,a,m,f,p,u){const C=t("a-button"),g=t("Icon"),k=t("CardGrid"),w=t("Card");return e(),n(w,c({title:"常用下载"},s.$attrs),{extra:o((()=>[l(C,{type:"link",size:"small"},{default:o((()=>[x])),_:1})])),default:o((()=>[(e(!0),n(r,null,d(s.items,(s=>(e(),n(k,{key:s,class:"!md:w-1/3 !w-full"},{default:o((()=>[l("span",j,[l(g,{icon:s.icon,color:s.color,size:"30"},null,8,["icon","color"]),l("span",b,i(s.title),1)]),l("div",y,i(s.desc),1),l("div",v,[l("span",null,"来源："+i(s.group),1),l("span",null,i(s.date),1)])])),_:2},1024)))),128))])),_:1},16)};export default u;