import './polyfills.server.mjs';
import{c as k}from"./chunk-GUUJ5FA2.mjs";import{b as j,c as R}from"./chunk-2AOMT67B.mjs";import{Aa as S,Ba as V,C,Ca as F,D as c,E as i,F as n,G as a,H as b,I as y,J as w,K as d,O as p,P as x,ba as M,g,ha as _,i as s,ka as f,l as u,m as h,ua as P,va as O,x as v,xa as L,y as m}from"./chunk-LX2X3SGF.mjs";function I(t,e){if(t&1&&a(0,"app-vaga-preview",8),t&2){let Y=e.$implicit;c("Vagapreview",Y)}}var H=(()=>{let e=class e{constructor(){this.vagaPreviewList=[],this.vagaService=g(R),this.filteredVagasList=[],this.vagaPreviewList=this.vagaService.getAllVagas(),this.filteredVagasList=this.vagaPreviewList}filterResults(r){if(!r){this.filteredVagasList=this.vagaPreviewList;return}this.filteredVagasList=this.vagaPreviewList.filter(o=>o?.cargo.toLowerCase().includes(r.toLowerCase())||o?.localidade.toLowerCase().includes(r.toLowerCase()))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-home"]],standalone:!0,features:[p],decls:11,vars:1,consts:[["filter",""],["href",v`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`,"rel","stylesheet","integrity","sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH","crossorigin","anonymous"],["role","search","id","search",1,"d-flex"],["id","search-bar"],["type","search","placeholder","Busca por local ou cargo","aria-label","Search",1,"form-control"],[1,"btn","btn-outline-primary",3,"click"],[1,"results"],[3,"Vagapreview",4,"ngFor","ngForOf"],[3,"Vagapreview"]],template:function(o,l){if(o&1){let z=b();a(0,"link",1),i(1,"body")(2,"section")(3,"div",2)(4,"div",3),a(5,"input",4,0),i(7,"button",5),y("click",function(){u(z);let B=w(6);return h(l.filterResults(B.value))}),d(8,"Buscar"),n()()()(),i(9,"section",6),C(10,I,1,1,"app-vaga-preview",7),n()()}o&2&&(m(10),c("ngForOf",l.filteredVagasList))},dependencies:[f,_,j],styles:["body[_ngcontent-%COMP%]{background-color:#c6c6df}.results[_ngcontent-%COMP%]{max-height:none;width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:start;flex-direction:row;row-gap:50px}#search[_ngcontent-%COMP%]{width:95%;height:15vh;background-color:#fff;margin:auto auto 50px;border-radius:15px;display:flex;align-items:center;justify-content:left;padding-left:45px}#search-bar[_ngcontent-%COMP%]{width:450px;height:50px;display:flex;gap:20px}button[_ngcontent-%COMP%]{border-color:#6948e2;color:#6948e2}button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:active{background-color:#6948e2;border-color:#6948e2;color:#fff}"]});let t=e;return t})();var T=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-header"]],standalone:!0,features:[p],decls:3,vars:0,template:function(o,l){o&1&&(i(0,"header")(1,"h1"),d(2,"Devjobs"),n()())},dependencies:[f],styles:['@charset "UTF-8";header[_ngcontent-%COMP%]{height:10vh;border-bottom-right-radius:35px;border-bottom-left-radius:35px;text-align:center;margin-bottom:40px;background:linear-gradient(-45deg,#c84de0,#e73c7e,#6948e2,#2335d5);background-size:400% 400%;animation:_ngcontent-%COMP%_gradient 15s ease infinite;display:flex;align-items:center;justify-content:flex-start;overflow:hidden}@keyframes _ngcontent-%COMP%_gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:1.8rem;margin-left:70px}']});let t=e;return t})();var N=()=>["/"],E=(()=>{let e=class e{constructor(){this.title="Devjobs"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:5,vars:2,consts:[[3,"routerLink"],[1,"content"]],template:function(o,l){o&1&&(i(0,"main")(1,"a",0),a(2,"app-header"),n(),i(3,"section",1),a(4,"router-outlet"),n()()),o&2&&(m(),c("routerLink",x(1,N)))},dependencies:[T,F,L,S],styles:["*[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none!important}body[_ngcontent-%COMP%]{background-color:#c6c6df}"]});let t=e;return t})();var J=[{path:"",component:H,title:"Home page"},{path:"details/:id",loadChildren:()=>import("./chunk-UXLVQFPW.mjs").then(t=>t.DetailsModule),title:"Home details"}],A=J;var U={providers:[V(A),O()]};var K={providers:[k()]},W=M(U,K);var Q=()=>P(E,W),_e=Q;export{_e as a};
