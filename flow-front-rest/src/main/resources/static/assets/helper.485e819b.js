import{aN as t}from"./vendor.d660e98f.js";function e(e,s="lang"){const n={};return Object.keys(e).forEach((o=>{const r=e[o].default;let a=o.replace(`./${s}/`,"").replace(/^\.\//,"");const c=a.lastIndexOf(".");a=a.substring(0,c);const f=a.split("/"),l=f.shift(),i=f.join(".");l&&(i?(t(n,l,n[l]||{}),t(n[l],i,r)):t(n,l,r||{}))})),n}export{e as g};