import{k as s,bm as a,K as e,o as t,n,P as o,q as d,S as l,ag as r,s as i,N as c,X as m}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{m as f}from"./index.e2ea082d.js";import{groupItems as p}from"./data.efa2ba67.js";/* empty css              */var u=s({components:{Card:a,CardGrid:a.Grid,Icon:f},setup:()=>({items:p})});const x=m("更多"),j={class:"flex"},b={class:"text-lg ml-4"},y={class:"flex mt-2 h-10 text-secondary"},v={class:"flex justify-between text-secondary"};u.render=function(s,a,m,f,p,u){const C=e("a-button"),g=e("Icon"),k=e("CardGrid"),w=e("Card");return t(),n(w,c({title:"常用下载"},s.$attrs),{extra:o((()=>[d(C,{type:"link",size:"small"},{default:o((()=>[x])),_:1})])),default:o((()=>[(t(!0),n(l,null,r(s.items,(s=>(t(),n(k,{key:s,class:"!md:w-1/3 !w-full"},{default:o((()=>[d("span",j,[d(g,{icon:s.icon,color:s.color,size:"30"},null,8,["icon","color"]),d("span",b,i(s.title),1)]),d("div",y,i(s.desc),1),d("div",v,[d("span",null,"来源："+i(s.group),1),d("span",null,i(s.date),1)])])),_:2},1024)))),128))])),_:1},16)};export default u;