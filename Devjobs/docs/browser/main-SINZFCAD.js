import{B as f,C as _,D as P,G as O,H as k,I as L,J as S,K as V,L as F,b as u,c as s,e as g,f as h,g as v,h as d,i as C,j as p,k as r,l as i,m as a,n as b,o as y,p as w,q as m,u as c,v as x,y as M}from"./chunk-EQFYZRR6.js";function W(t,e){if(t&1&&a(0,"app-vaga-preview",8),t&2){let E=e.$implicit;p("Vagapreview",E)}}var D=(()=>{let e=class e{constructor(){this.vagaPreviewList=[],this.vagaService=u(F),this.filteredVagasList=[],this.vagaPreviewList=this.vagaService.getAllVagas(),this.filteredVagasList=this.vagaPreviewList}filterResults(n){if(!n){this.filteredVagasList=this.vagaPreviewList;return}this.filteredVagasList=this.vagaPreviewList.filter(o=>o?.cargo.toLowerCase().includes(n.toLowerCase())||o?.localidade.toLowerCase().includes(n.toLowerCase()))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-home"]],standalone:!0,features:[c],decls:11,vars:1,consts:[["filter",""],["href",v`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`,"rel","stylesheet","integrity","sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH","crossorigin","anonymous"],["role","search","id","search",1,"d-flex"],["id","search-bar"],["type","search","placeholder","Busca por local ou cargo","aria-label","Search",1,"form-control"],[1,"btn","btn-outline-primary",3,"click"],[1,"results"],[3,"Vagapreview",4,"ngFor","ngForOf"],[3,"Vagapreview"]],template:function(o,l){if(o&1){let A=b();a(0,"link",1),r(1,"body")(2,"section")(3,"div",2)(4,"div",3),a(5,"input",4,0),r(7,"button",5),y("click",function(){g(A);let U=w(6);return h(l.filterResults(U.value))}),m(8,"Buscar"),i()()()(),r(9,"section",6),C(10,W,1,1,"app-vaga-preview",7),i()()}o&2&&(d(10),p("ngForOf",l.filteredVagasList))},dependencies:[f,M,V],styles:["body[_ngcontent-%COMP%]{background-color:#c6c6df}.results[_ngcontent-%COMP%]{max-height:none;width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:start;flex-direction:row;row-gap:50px}#search[_ngcontent-%COMP%]{width:95%;height:15vh;background-color:#fff;margin:auto auto 50px;border-radius:15px;display:flex;align-items:center;justify-content:left;padding-left:45px}#search-bar[_ngcontent-%COMP%]{width:450px;height:50px;display:flex;gap:20px}button[_ngcontent-%COMP%]{border-color:#6948e2;color:#6948e2}button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:active{background-color:#6948e2;border-color:#6948e2;color:#fff}"]});let t=e;return t})();var R=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-header"]],standalone:!0,features:[c],decls:3,vars:0,template:function(o,l){o&1&&(r(0,"header")(1,"h1"),m(2,"Devjobs"),i()())},dependencies:[f],styles:['@charset "UTF-8";header[_ngcontent-%COMP%]{height:10vh;border-bottom-right-radius:35px;border-bottom-left-radius:35px;text-align:center;margin-bottom:40px;background:linear-gradient(-45deg,#c84de0,#e73c7e,#6948e2,#2335d5);background-size:400% 400%;animation:_ngcontent-%COMP%_gradient 15s ease infinite;display:flex;align-items:center;justify-content:flex-start;overflow:hidden}@keyframes _ngcontent-%COMP%_gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:1.8rem;margin-left:70px}']});let t=e;return t})();var Y=()=>["/"],T=(()=>{let e=class e{constructor(){this.title="Devjobs"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[c],decls:5,vars:2,consts:[[3,"routerLink"],[1,"content"]],template:function(o,l){o&1&&(r(0,"main")(1,"a",0),a(2,"app-header"),i(),r(3,"section",1),a(4,"router-outlet"),i()()),o&2&&(d(),p("routerLink",x(1,Y)))},dependencies:[R,S,O,k],styles:["*[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none!important}body[_ngcontent-%COMP%]{background-color:#c6c6df}"]});let t=e;return t})();var z=[{path:"",component:D,title:"Home page"},{path:"details/:id",loadChildren:()=>import("./chunk-5ZABTHNY.js").then(t=>t.DetailsModule),title:"Home details"}],H=z;_(T,{providers:[P(),L(H)]}).catch(t=>console.error(t));