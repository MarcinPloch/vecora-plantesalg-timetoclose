"use strict";(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let r=document.querySelectorAll("[time-to-close]"),s=new Date,l=s.getDay();function c(){var f;let u=new Date,e=0,n=0,i="";function o(t){return[Math.floor(t/1e3/60/60%60),Math.floor(t/1e3/60%60),Math.round(t/1e3%60)]}function m(t){e=s.setHours(t,0,0)-u,n=e/1e3/60/60%60,n<=1?i=`${o(e)[1]} minuter`:n>1&&n<2?i=`${o(e)[0]} time ${o(e)[1]} minuter`:i=`${o(e)[0]} timer ${o(e)[1]} minuter`}!r||(m(l===6||l===7?18:19),n>0&&n<20&&((f=document.querySelector(".time-to-close-wrapper"))==null||f.classList.remove("hidden"),r.forEach(t=>{t.innerHTML=`Plantesalget er \xE5pent. ${i} til stengetid. ${u}`})),setTimeout(c,6e4))}c()});})();
