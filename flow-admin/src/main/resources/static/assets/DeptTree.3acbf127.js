import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.39b0f7de.js";import{a as t}from"./system.c335b09c.js";import{k as a,r,I as s,K as n,o,n as c,q as i}from"./vendor.bc3b2d68.js";import"./index.f72cd585.js";import"./useContextMenu.e2a9a589.js";/* empty css              */import"./useExpose.c4c32617.js";var l=a({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:a}){const n=r([]);function o(){return e=this,a=null,r=function*(){n.value=yield t()},new Promise(((t,s)=>{var n=e=>{try{c(r.next(e))}catch(t){s(t)}},o=e=>{try{c(r.throw(e))}catch(t){s(t)}},c=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,o);c((r=r.apply(e,a)).next())}));var e,a,r}return s((()=>{o()})),{treeData:n,handleSelect:function(e,t){a("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,a,r,s,l){const m=n("BasicTree");return o(),c("div",d,[i(m,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;