import{u as t}from"./useApexCharts.9147d639.js";import{k as e,r as a,I as s,o as r,n as o}from"./vendor.bc3b2d68.js";import"./index.f72cd585.js";var i=e({setup(){const e=a(null),{setOptions:r}=t();return s((()=>{r({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],chart:{height:350,type:"radar",toolbar:{show:!1}},yaxis:{show:!1},title:{show:!1},markers:{},xaxis:{categories:["2016","2017","2018","2019","2020","2021"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:e}}});const d={ref:"chartRef",style:{width:"100%"}};i.render=function(t,e,a,s,i,n){return r(),o("div",d,null,512)};export default i;