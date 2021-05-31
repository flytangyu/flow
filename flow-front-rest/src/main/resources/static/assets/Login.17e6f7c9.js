import{_ as e,a as o,b as s,u as t,c as r,d as l,e as n}from"./index.51c58f14.js";import i from"./LoginForm.e61208bb.js";import a from"./ForgetPasswordForm.2c275dc9.js";import m from"./RegisterForm.18decef7.js";import d from"./MobileForm.2c98d08b.js";import p from"./QrCodeForm.28b1a338.js";import{k as x,f as c,K as f,o as g,n as u,W as w,q as h,s as F}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.894494e1.js";import"./CountdownInput.fe85330d.js";import"./StrengthMeter.765addc9.js";import"./download.fca43234.js";var v=x({name:"Login",components:{AppLogo:e,LoginForm:i,ForgetPasswordForm:a,RegisterForm:m,MobileForm:d,QrCodeForm:p,AppLocalePicker:o,AppDarkModeToggle:s},props:{sessionTimeout:{type:Boolean}},setup(){const e=t(),{prefixCls:o}=r("login"),{t:s}=l(),i=n();return{t:s,prefixCls:o,title:c((()=>{var o;return null!=(o=null==e?void 0:e.title)?o:""})),showLocale:i.getShowPicker}}});const b={class:"-enter-x xl:hidden"},j={class:"container relative h-full py-2 mx-auto sm:px-10"},y={class:"flex h-full"},k={class:"hidden xl:flex xl:flex-col xl:w-6/12 min-h-full mr-4 pl-4"},L={class:"my-auto"},T={class:"mt-10 font-medium text-white -enter-x"},C={class:"mt-4 text-3xl inline-block"},A={class:"mt-5 text-md text-white font-normal dark:text-gray-500 -enter-x"},M={class:"h-full xl:h-auto flex py-5 xl:py-0 xl:my-0 w-full xl:w-6/12"};v.render=function(e,o,s,t,r,l){const n=f("AppLocalePicker"),i=f("AppDarkModeToggle"),a=f("AppLogo"),m=f("LoginForm"),d=f("ForgetPasswordForm"),p=f("RegisterForm"),x=f("MobileForm"),c=f("QrCodeForm");return g(),u("div",{class:[e.prefixCls,"relative w-full h-full px-4"]},[e.sessionTimeout?w("",!0):(g(),u(n,{key:0,class:"absolute top-4 right-4 enter-x text-white xl:text-gray-600",showText:!1})),e.sessionTimeout?w("",!0):(g(),u(i,{key:1,class:"absolute top-3 right-7 enter-x"})),h("span",b,[h(a,{alwaysShowTitle:!0})]),h("div",j,[h("div",y,[h("div",k,[h(a,{class:"-enter-x"}),h("div",L,[h("img",{alt:e.title,src:"/assets/login-box-bg.9027741f.svg",class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),h("div",T,[h("span",C,F(e.t("sys.login.signInTitle")),1)]),h("div",A,F(e.t("sys.login.signInDesc")),1)])]),h("div",M,[h("div",{class:[`${e.prefixCls}-form`,"\n              my-auto\n              mx-auto\n              xl:ml-20\n              xl:bg-transparent\n              px-5\n              py-8\n              sm:px-8\n              xl:p-4\n              rounded-md\n              shadow-md\n              xl:shadow-none\n              w-full\n              sm:w-3/4\n              lg:w-2/4\n              xl:w-auto\n              enter-x\n              relative\n            "]},[h(m),h(d),h(p),h(x),h(c)],2)])])])],2)};export default v;