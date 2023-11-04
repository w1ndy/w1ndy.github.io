import{i as t,c as u,t as r,a as s,A as d,F as c,s as p,I as m}from"./index-9095f109.js";import{N as f,a as C,G as b,b as v,c as E,d as S,e as V,f as G,g as T}from"./geonetverse-405ca75c.js";import{P as I}from"./PaperEntry-05cd21b0.js";const _=r("<div class=mt-4><div class=text-gray-500></div><div>");function w(e){return(()=>{const a=_(),n=a.firstChild,i=n.nextSibling;return t(n,()=>e.date),u(()=>i.innerHTML=e.content),a})()}const D=[{date:"Mar 6, 2023 - Pinned",content:`I've joined School of Software Technology, Zhejiang University as a full-time tenure-track assistant professor and I'm <b style="color: darkred">looking for motivated PhD and master students!</b> Please drop me an email if you are interested.`},{date:"Nov 11, 2023",content:'Our paper, "<a href="https://doi.org/10.1109/TVCG.2023.3329120" target="_blank">Interactive Table Synthesis with Natural Language</a>" has been accepted by IEEE TVCG!'},{date:"Oct 10, 2023",content:'Two of our papers, "<a href="https://doi.org/10.1109/TVCG.2023.3327162" target="_blank">Visualizing Large-Scale Spatial Time Series with GeoChron</a>" and "<a href="https://doi.org/10.1109/TVCG.2022.3229953" target="_blank">Multilevel Visual Analysis of Aggregate Geo-Networks</a>", will be presented in the upcoming <a href="https://ieeevis.org/year/2023/welcome" target="_blank">IEEE VIS 2023</a> conference! I will also chair the "GeoVis" session on Oct 27.'},{date:"Jul 16, 2023",content:'Our paper, "<a href="https://doi.org/10.1109/TVCG.2023.3327162" target="_blank">Visualizing Large-Scale Spatial Time Series with GeoChron</a>", has been accepted by <a href="https://ieeevis.org/year/2023/welcome" target="_blank">IEEE VIS 2023</a>!'},{date:"Jul 10, 2023",content:`I'll present our work "<a href="https://doi.org/10.1109/TVCG.2022.3209385" target="_blank">Rigel: Transforming Tabular Data by Declarative Mapping</a>", and also chair the "Application 1" session at <a href="https://chinavis.org/2023/english/index_en.html">the upcoming ChinaVis 2023 conference</a> to be held in Chongqing, China.`},{date:"Apr 23, 2023",content:'Our paper, "<a href="https://dl.acm.org/doi/10.1145/3544548.3581470" target="_blank">GeoCamera: Telling Stories in Geographic Visualizations with Camera Movements</a>", will be presented at <a href="https://chi2023.acm.org/" target="_blank">the upcoming CHI 2023 conference</a>.'}],k=[{tag:"IEEE TVCG 2023",papers:[{image:f,authors:["Yanwei Huang","Yunfan Zhou","Ran Chen","Changhao Pan","Xinhuan Shu","Di Weng","Yingcai Wu"],corresponding_authors:["Di Weng"],title:"Interactive Table Synthesis with Natural Language",venue:"IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023",doi:"10.1109/TVCG.2023.3329120",pdf:C},{image:b,authors:["Zikun Deng","Shifu Chen","Xiao Xie","Guodao Sun","Mingliang Xu","Di Weng","Yingcai Wu"],corresponding_authors:["Di Weng","Yingcai Wu"],title:"Multilevel Visual Analysis of Aggregate Geo-Networks",venue:"IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023",doi:"10.1109/TVCG.2022.3229953",pdf:v}]},{tag:"IEEE VIS 2023",papers:[{image:E,authors:["Zikun Deng","Shifu Chen","Tobias Schreck","Dazhen Deng","Tan Tang","Mingliang Xu","Di Weng","Yingcai Wu"],corresponding_authors:["Di Weng"],title:"Visualizing Large-Scale Spatial Time Series with GeoChron",venue:"IEEE Transactions on Visualization and Computer Graphics (TVCG), 2024 (also appears in IEEE VIS 2023)",doi:"10.1109/TVCG.2023.3327162",pdf:S},{image:V,authors:["Yue Yu","Yifang Wang","Qisen Yang","Di Weng","Yongjun Zhang","Xiaogang Wu","Yingcai Wu","Huamin Qu"],title:"NeighViz: Towards Better Understanding of Neighborhood Effects on Social Groups with Spatial Data",venue:"9th Symposium on Visualization in Data Science (VDS @ IEEE VIS 2023), 2023",doi:"10.48550/arXiv.2309.11454",pdf:G}]},{tag:"ACM CHI 2023",papers:[{image:T,authors:["Wenchao Li","Zhan Wang","Yun Wang","Di Weng","Liwenhan Xie","Siming Chen","Haidong Zhang","Huamin Qu"],title:"GeoCamera: Telling Stories in Geographic Visualizations with Camera Movements",venue:"ACM Conference on Human Factors in Computing Systems (CHI), 2023",doi:"10.1145/3544548.3581470"}]}],$=r('<div class=py-8><div class=mb-3><span class="uppercase tracking-wider font-bold">Recent Publications'),y=r('<div class=mb-4><div class="text-gray-500 font-bold">');function W(){return(()=>{const e=$(),a=e.firstChild;return a.firstChild,t(a,s(d,{href:"/publications",class:"ml-2",children:"[see all]"}),null),t(e,s(c,{each:k,children:n=>(()=>{const i=y(),o=i.firstChild;return t(o,()=>n.tag),t(i,s(c,{get each(){return n.papers},children:l=>s(I,{paper:l})}),null),i})()}),null),e})()}const N="/assets/me-637c50f7.jpg",P=r('<div class="sm:flex overflow-y-scroll"><div class="sm:max-w-2xl sm:mr-6"><div class=flex><div></div><div class="flex-none hidden sm:block"><img class="w-44 h-52 object-cover ml-4"></div></div></div><div class="pb-10 sm:w-96 flex-none"><div class="uppercase tracking-wider font-bold">News');function M(){return(()=>{const e=P(),a=e.firstChild,n=a.firstChild,i=n.firstChild,o=i.nextSibling,l=o.firstChild,g=a.nextSibling;return g.firstChild,p(l,"src",N),t(a,s(W,{}),null),t(g,s(c,{each:D,children:h=>s(w,{get date(){return h.date},get content(){return h.content}})}),null),u(()=>i.innerHTML=m.bio),e})()}export{M as default};
