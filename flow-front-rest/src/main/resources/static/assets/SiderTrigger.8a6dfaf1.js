import{n as e}from"./index.e2ea082d.js";import{k as o,c6 as l,c7 as t,K as s,o as a,n as d,ar as n}from"./vendor.d660e98f.js";var r=o({name:"SiderTrigger",components:{DoubleRightOutlined:l,DoubleLeftOutlined:t},setup(){const{getCollapsed:o,toggleCollapsed:l}=e();return{getCollapsed:o,toggleCollapsed:l}}});r.render=function(e,o,l,t,r,g){const i=s("DoubleRightOutlined"),p=s("DoubleLeftOutlined");return a(),d("div",{onClick:o[1]||(o[1]=n(((...o)=>e.toggleCollapsed&&e.toggleCollapsed(...o)),["stop"]))},[e.getCollapsed?(a(),d(i,{key:0})):(a(),d(p,{key:1}))])};export default r;