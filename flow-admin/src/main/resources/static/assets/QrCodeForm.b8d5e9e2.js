import{_ as e,u as s,L as a}from"./LoginFormTitle.37507c69.js";import{k as n,aJ as t,aV as o,f as r,u as i,K as l,o as c,n as d,q as m,Q as f,Y as g,s as u,V as x,X as p}from"./vendor.bc3b2d68.js";/* empty css              */import{_ as k}from"./Qrcode.ba93bf5a.js";import{d as v}from"./index.f72cd585.js";import"./download.a0c19fe1.js";var b=n({name:"QrCodeForm",components:{Button:t,QrCode:k,Divider:o,LoginFormTitle:e},setup(){const{t:e}=v(),{handleBackLogin:n,getLoginState:t}=s();return{t:e,handleBackLogin:n,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(t)===a.QR_CODE))}}});const h={class:"enter-x min-w-64 min-h-64"};b.render=function(e,s,a,n,t,o){const r=l("LoginFormTitle"),i=l("QrCode"),k=l("Divider"),v=l("Button");return e.getShow?(c(),d(x,{key:0},[m(r,{class:"enter-x"}),m("div",h,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(k,{class:"enter-x"},{default:f((()=>[g(u(e.t("sys.login.scanSign")),1)])),_:1}),m(v,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:f((()=>[g(u(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default b;